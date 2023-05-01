<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\RingData;

class GhImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
        {
            foreach ($rows as $row) {
                $diamond = [];
                $diamondOptions = [
                    'roundcompatible' => 1,
                    'princesscompatible' => 2,
                    'cushioncompatible' => 3,
                    'radiantcompatible' => 4,
                    'asschercompatible' => 5,
                    'emeraldcompatible' => 6,
                    'ovalcompatible' => 7,
                    'pearcompatible' => 8,
                    'marquisecompatible' => 9,
                    'heartcompatible' => 10
                ];
                foreach ($diamondOptions as $key => $value) {
                    if ($row[$key] == 'Y') {
                        array_push($diamond, $value);
                    }
                }
                $diamonds=array("",1=>"Round",2=>"Princess",3=>"Cushion",4=>"Radiant",5=>"Asscher",6=>"Emerald",7=>"Oval",8=>"Pear",9=>"Marquise",10=>"Heart",11=>"Square");
                $diamond_type=$diamonds[$diamond[0]];
                $basesku=explode('-',$row['id']);
                RingData::updateOrCreate(
                    ['sku' => $row['id']],
                    [
                        'base_sku' => $basesku[0],
                        'category' => $row['itemtype'] ,
                        'sub_category' => $row['style'] ,
                        'product_name' =>$row['style'].",".$row['metal'],
                        'product_description' => $row['style'].",".$row['metal'],
                        'design_name' => $row['design_name'] ?? "",
                        'metal_name' => $row['metal'] ?? $row['default_metal'] ?? "",
                        'base_price' => $row['price'] ?? "",
                        'additional_metal_price' => $row['additional_metal_price'] ?? "",
                        'total_price' => $row['price'] ?? "",
                        'weight' => $row['weight'] ?? $row['metalweight'] ?? "",
                        'status' => $row['status'] ?? "1",
                        'qty' => 10,
                        'diamond_can_be_matched_with' => implode(',', $diamond) ?? "",
                        'main_image' =>'https://integrations.thediamondport.com/public/rings/'. $basesku[0]."/".$diamond_type."/".$basesku[2]."/"."1.png",
                        'additional_image_1' =>'https://integrations.thediamondport.com/public/rings/'. $basesku[0]."/".$diamond_type."/".$basesku[2]."/"."2.png",
                        'additional_image_2' =>'https://integrations.thediamondport.com/public/rings/'. $basesku[0]."/".$diamond_type."/".$basesku[2]."/"."3.png",
                        'additional_image_3' =>'https://integrations.thediamondport.com/public/rings/'. $basesku[0]."/".$diamond_type."/".$basesku[2]."/"."4.png",
                        'additional_image_4' =>'https://integrations.thediamondport.com/public/rings/'. $basesku[0]."/".$diamond_type."/".$basesku[2]."/"."5.png",
                        'additional_image_5' =>'https://integrations.thediamondport.com/public/rings/'. $basesku[0]."/".$diamond_type."/".$basesku[2]."/"."6.png",
                        'video' =>'https://integrations.thediamondport.com/public/rings/'.$basesku[0]."/".$diamond_type."/".$basesku[2]."/"."y.mp4",
                        'setting_width' => $row['setting_width'] ?? "",
                        'type' => $row['itemtype'],
                        'vendor' => 'GH',
                        'page_title' =>  $row['style'].",".$row['metal']
                    ]
                );
            }
        }
}
