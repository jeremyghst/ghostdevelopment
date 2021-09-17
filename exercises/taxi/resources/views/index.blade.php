@include('components/head')
@include('components/header')
        <main>
            <aside id="voegToeBar">
                <button onclick="toggleModal()">Voeg taxi toe</button>
            </aside>
            <table id="taxiTable">
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Licence plate:</th>
                        <th>Location:</th>
                        <th>Mileage:</th>
                        <th>Gas:</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($taxis as $taxi)
                        <tr onclick="editTaxi('{{$taxi->id}}')">
                            <td>{{$taxi->id}}</td>
                            <td>{{$taxi->licence_plate}}</td>
                            <td>{{$taxi->location}}</td>
                            <td>{{$taxi->mileage}} <small>miles</small></td>
                            <td>{{$taxi->gas}} <small>gallons</small></td>
                            <input type="hidden" value="1">
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </main>
        @include('components/createTaxiModal')
    </body>
</html>
