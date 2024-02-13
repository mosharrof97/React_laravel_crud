<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\dataTable;

class crudController extends Controller
{
   public function index(){

        $data=dataTable::get();

        return response()->json([
        'status'=>true,
        'data'=>$data,
        ], 200);
   }

   public function create(){

   }

   public function store(Request $request){

        $request->validate([
            'name'=> ['required'],
            'number'=> ['required', 'max:11'],
            'email'=> ['required'],
            'address'=> ['required'],
        ]);

        $data = dataTable::create($request->all());
        
        return response()->json([
            'status'=>true, 
            'data'=>$data,
            'mass' => 'Data Create Successfull',
        ], 200);

   }


    public function update(Request $request, $id){

        $request->validate([
        'name'=> ['required'],
        'number'=> ['required', 'max:11'],
        'email'=> ['required'],
        'address'=> ['required'],
        ]);

        $data = dataTable::where('id',$id)->first()->update($request->all());

        return response()->json([
            'status'=> true,
            'data' => $data,
            'mass' => 'Data Update Successfull',
        ], 200 );
    }

    public function delete($id){
        $data = dataTable::where('id',$id)->first();
        $data->delete();

        return response()->json([
            'status'=> true,
            'mass' => 'Data Delete Successfull',
        ], 200 );
    }
    
}