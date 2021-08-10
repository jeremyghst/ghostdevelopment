<aside id="modal">
    <form METHOD="get">
        <button type="reset" id="closeBtn" onclick="toggleModal()">X</button>
        <div class="flexItem">
            <label for="licence_plate">Licence plate</label>
            <div id="licence">
                <input type="text" id="licence_plate" name="licence_plate1" minlength="3" maxlength="3" required>
                <span>-</span>
                <input type="text" id="licence_plate" name="licence_plate2" minlength="3" maxlength="3" required>
                <span>-</span>
                <input type="text" id="licence_plate" name="licence_plate3" minlength="3" maxlength="3" required>
            </div>
        </div>
        <button type="submit" id="submitBtn" formaction="{{route('createTaxi')}}">Create taxi</button>
    </form>
</aside>