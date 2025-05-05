(function() {
    if (typeof google === 'undefined' || typeof ol === 'undefined') {
        console.error('Google Maps API or OpenLayers is not loaded.');
        return;
    }
    const streetViewService = new google.maps.StreetViewService();
    const STREETVIEW_MAX_DISTANCE = 100;
    const streetViewIcon = document.getElementById('street-view-icon');
    const mapContainer = document.getElementById('map');
    const streetViewPanorama = document.getElementById('street-view-panorama');
    const closeStreetViewButton = document.getElementById('close-street-view');
    let isDragging = false;
    let panoramaInstance;
    function initStreetView() {
        streetViewIcon.addEventListener('mousedown', startDragging);
        document.addEventListener('mouseup', stopDragging);
        mapContainer.addEventListener('mousemove', handleDragging);
        closeStreetViewButton.addEventListener('click', closeStreetView);
    }
    function startDragging(event) {
        isDragging = true;
        streetViewIcon.classList.add('dragging');
        streetViewIcon.style.cursor = 'grabbing';
        event.preventDefault();
    }
    function stopDragging(event) {
        if (isDragging) {
            isDragging = false;
            streetViewIcon.classList.remove('dragging');
            streetViewIcon.style.cursor = 'grab';
            const rect = mapContainer.getBoundingClientRect();
            const dropX = event.clientX - rect.left;
            const dropY = event.clientY - rect.top;
            const dropCoordinate = map.getCoordinateFromPixel([dropX, dropY]);
            checkStreetViewAvailability(dropCoordinate);
            resetPegmanPosition();
        }
    }
    function handleDragging(event) {
        if (!isDragging) return;
        const rect = mapContainer.getBoundingClientRect();
        streetViewIcon.style.transform = `translate(${event.clientX - rect.left - 20}px, ${event.clientY - rect.top - 20}px)`;
    }
    function resetPegmanPosition() {
        streetViewIcon.style.transform = 'translate(0px, 0px)';
    }
    function checkStreetViewAvailability(coordinate) {
        const lonLat = ol.proj.toLonLat(coordinate);
        const lat = lonLat[1];
        const lng = lonLat[0];
        const latLng = new google.maps.LatLng(lat, lng);
        streetViewService.getPanorama({
            location: latLng,
            radius: STREETVIEW_MAX_DISTANCE
        }, function(data, status) {
            if (status === google.maps.StreetViewStatus.OK) {
                openStreetView(coordinate);
            } else {
                alert('Street View data not found for this location.');
            }
        });
    }
    function openStreetView(coordinate) {
        const lonLat = ol.proj.toLonLat(coordinate);
        const lat = lonLat[1];
        const lng = lonLat[0];
        const latLng = new google.maps.LatLng(lat, lng);
        streetViewService.getPanorama({
            location: latLng,
            radius: STREETVIEW_MAX_DISTANCE
        }, function(data, status) {
            if (status === google.maps.StreetViewStatus.OK) {
                panoramaInstance = new google.maps.StreetViewPanorama(
                    streetViewPanorama,
                    {
                        position: data.location.latLng,
                        pov: { heading: 165, pitch: 0 },
                        zoom: 1,
                        visible: true
                    }
                );
                streetViewPanorama.style.display = 'block';
                closeStreetViewButton.style.display = 'block';
            } else {
                alert('Street View data not found for this location.');
            }
        });
    }
    function closeStreetView() {
        streetViewPanorama.style.display = 'none';
        closeStreetViewButton.style.display = 'none';
        if (panoramaInstance) {
            panoramaInstance.setVisible(false);
            panoramaInstance = null;
        }
    }
    window.initStreetView = initStreetView;
})();