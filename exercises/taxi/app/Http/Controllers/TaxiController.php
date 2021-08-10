<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Taxi;
use App\Models\Location;

class TaxiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $taxis = Taxi::getAll();
        return view("index", ["taxis" => $taxis]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $licence_plate = strtoupper($request->licence_plate1) . "-" . strtoupper($request->licence_plate2) . "-" . strtoupper($request->licence_plate3);

        $taxi = new Taxi;
        $taxi->licence_plate = $licence_plate;
        $taxi->location = "Station";
        $taxi->mileage = 0;
        $taxi->gas = 10;

        if($taxi->save()){
            return redirect()->route("getTaxi");
        } else {
            return redirect()->back();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $taxi = Taxi::findOrFail($id);
        $locations = Location::getAll();
        return view("editTaxi", ["taxi" => $taxi, "locations" => $locations]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $licence_plate = strtoupper($request->licence_plate1) . "-" . strtoupper($request->licence_plate2) . "-" . strtoupper($request->licence_plate3);

        $taxi = Taxi::findOrFail($id);
        $taxi->licence_plate = $licence_plate;
        
        if($taxi->location !== $request->location){
            $start = Location::get()->where("location_name", "=", $taxi->location)->first();
            $end = Location::get()->where("location_name", "=", $request->location)->first();

            $cost = abs(intval($start->location_value) - intval($end->location_value));
        } else {
            $cost = 0;
        }

        $taxi->location = $request->location;

  
        $taxi->mileage = $taxi->mileage + $cost;
        $taxi->gas = $taxi->gas - ($cost/10);

        $taxi->save();
        return redirect()->back();
    }

    public function refuel($id){
        $taxi = Taxi::findOrFail($id);
        $taxi->gas = 10;

        $taxi->update();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $taxi = Taxi::findOrFail($id);
        if($taxi->delete()){
            return redirect()->route("getTaxi");
        } else {
            return redirect()->back();
        }
    }
}
