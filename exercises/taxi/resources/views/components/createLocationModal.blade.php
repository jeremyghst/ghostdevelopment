<aside id="modal">
    <form METHOD="get">
        <button type="reset" id="closeBtn" onclick="toggleModal()">X</button>
        <div class="flexItem">
            <label for="location_name">Name</label>
            <input type="text" id="location_name" name="location_name">
        </div>
        <div class="flexItem">
            <label for="location_value">Value</label>
            <div>
                <input type="number" id="location_value" name="location_value">
                <small>miles</small>
            </div>
        </div>
        <button type="submit" id="submitBtn" formaction="{{route('createLocation')}}">Create locatie</button>
    </form>
</aside>