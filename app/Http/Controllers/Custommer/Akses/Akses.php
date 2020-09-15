<?php

namespace App\Http\Controllers\Custommer\Akses;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Custommer\Input\Input;
use App\Http\Controllers\Custommer\Output\Output;
use App\Http\Controllers\Custommer\Proses\Proses;
use App\Http\Controllers\Custommer\Validasi\Validasi;
use Illuminate\Http\Request;

class Akses extends Controller
{
    public $validasi;
    public $input;
    public $proses;
    public $output;

    function __construct()
    {
        $this->validasi = new Validasi;
        $this->input = new Input;
        $this->proses = new Proses;
        $this->output = new Output;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $proses = $this->proses->index();
        return $this->output->index($proses);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $nilai = $request->all();
        $val = $this->validasi->store($nilai);
        if ($val->fails()) {
            return response()->json([
                'error' => $val->errors()
            ], 404);
        }
        $data = $this->input->store($nilai);
        $proses = $this->proses->store($data);
        return $this->output->store($proses);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $proses = $this->proses->show($id);
        return $this->output->show($proses);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $nilai = $request->all();
        $val = $this->validasi->update($id);
        if ($val->fails()) {
            return response()->json([
                'error' => $val->errors()
            ], 404);
        }
        $data = $this->input->update($nilai);
        $proses = $this->proses->update($data, $id);
        return $this->output->update($proses);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $proses = $this->proses->destroy($id);
        return $this->output->destroy($proses);
    }
}
