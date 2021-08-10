@include('components/head')
@include('components/header')
        <main>
            <form id="editForm">
                <div class="flexItem">
                    <label for="location_name">Name</label>
                    <input type="text" id="location_name" name="location_name" value="{{$location->location_name}}">
                </div>
                <div class="flexItem">
                <label for="location_value">Value</label>
                    <input type="text" id="location_value" name="location_value" value="{{$location->location_value}}">
                </div>
                <div></div>
                <button type="submit" id="updateBtn" formaction="{{route('updateLocation', ['location' => $location->id])}}">Update location</button>
                <button type="submit" id="deleteBtn" formaction="{{route('deleteLocation', ['location' => $location->id])}}">Delete location</button>
            </form>
        </main>
    </body>
</html>