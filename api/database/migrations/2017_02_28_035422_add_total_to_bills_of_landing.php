<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTotalToBillsOfLanding extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bills_of_landing', function (Blueprint $table) {
            //
            $table->integer('total')->unsigned()->default(0);
            $table->float('total_without_sub_fee')->unsigned()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bills_of_landing', function (Blueprint $table) {
            //
        });
    }
}
