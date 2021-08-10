@include('components/head')
@include('components/header')
        <main>
            <aside id="voegToeBar">
                <button onclick="toggleModal()">Voeg locatie toe</button>
            </aside>
            <table id="taxiTable">
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Name:</th>
                        <th>Value:</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($locations as $location)
                        <tr onclick="editLocation('{{$location->id}}')">
                            <td>{{$location->id}}</td>
                            <td>{{$location->location_name}}</td>
                            <td>{{$location->location_value}} <small>miles</small></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </main>
        @include('components/createLocationModal')
    </body>
</html>