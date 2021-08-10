@include('components/head')
@include('components/header')
        <main>
            <form id="editForm">
                <div class="flexItem">
                    <label for="licence_plate">Licence plate</label>
                    <div id="licence">
                        <input type="text" id="licence_plate" name="licence_plate1" minlength="3" maxlength="3" value="{{substr($taxi->licence_plate, 0, 3)}}" required>
                        <span>-</span>
                        <input type="text" id="licence_plate" name="licence_plate2" minlength="3" maxlength="3" value="{{substr($taxi->licence_plate, 4, 3)}}" required>
                        <span>-</span>
                        <input type="text" id="licence_plate" name="licence_plate3" minlength="3" maxlength="3" value="{{substr($taxi->licence_plate, 8, 3)}}" required>
                    </div>
                </div>
                <div class="flexItem">
                    <label for="location">Location</label>
                    <select name="location" id="location">
                        @foreach($locations as $location)
                            <option value="{{$location->location_name}}"
                            {{($taxi->location === $location->location_name) ? "selected" : ""}}  
                            >{{$location->location_name}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="flexItem">
                    <label for="mileage">Mileage</label>
                    <p>{{$taxi->mileage}} <small>miles</small></p>
                </div>
                <div class="flexItem">
                    <label for="gas">Gas</label>
                    <p>{{$taxi->gas}} <small>gallons</small><p>
                </div>
                <div></div>
                <button type="submit" id="updateBtn" formaction="{{route('updateTaxi', ['taxi' => $taxi->id])}}">Update taxi</button>
                <button type="submit" id="deleteBtn" formaction="{{route('deleteTaxi', ['taxi' => $taxi->id])}}">Delete taxi</button>
                <button type="submit" id="fuelBtn" formaction="{{route('refuelTaxi', ['taxi' => $taxi->id])}}">Refuel</button>
            </form>
        </main>
    </body>
</html>