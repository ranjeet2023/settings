<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\RingImport;
use App\Models\RingData;

class RingImportController extends Controller
{
    //
    public function fileImportExport()
    {
       return view('welcome');
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function fileImport(Request $request)
    {

        Excel::import(new RingImport, $request->file('file')->store('files'));
        return redirect()->back()->with('success','data inserted successfully');
    }
}
