<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\RingData;
use App\Helper\Helper;
use Maatwebsite\Excel\Concerns\ToCollection;

class RingImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {

        foreach ($rows as $row) {
            $data = explode(',',$row['categories']);
            $record=explode('/',$data[0]);

            if(empty($record[2]) ||  empty($record[1]) || empty($record[0])) {
                $record[2]=null;
                $record[1]=null;
                $record[0]=null;
            }

            RingData::updateOrCreate(
                ['item' => $row['item']],
            [
                'image_top'=>$row['item'].'.jpg',
                'image_side'=>$row['item'].'side.jpg',
                'image_side2'=>$row['item'].'set.jpg',
                'catalogsupplement'=>$row['catalogsupplement'],
                'page'=>$row['page'],
                'default_metal'=>$row['default_metal'],
                'default_color'=>$row['default_color'],
                'categories'=> $record[0],
                'subcategory'=> $record[1],
                'diamond_type'=> $record[2],
                'approx_semimount_dwt'=>$row['approx_semi_mount_dwt'],
                'pc_casting'=>$row['pc_casting'],
                'stone_breakdown'=>$row['stone_breakdown'],
                'diamond_cttw_provided'=>$row['diamond_cttw_provided'],
                'diamond_quality_that_prices_are_based_at'=>$row['diamond_quality_that_prices_are_based_at'],
                'gold_polished_1300'=>$row['gold_polished_1300'],
                'gold_complete_1300'=>$row['gold_complete_1300'],
                'gold_semi_mount_1300'=>$row['gold_semi_mount_1300'],
                'gold_polished_1700'=>$row['gold_polished_1700'],
                'gold_complete_1700'=>$row['gold_complete_1700'],
                'gold_semi_mount_1700'=>$row['gold_semi_mount_1700'],
                'silver_polished_40'=>$row['silver_polished_40'],
                'silver_complete_40'=>$row['silver_complete_40'],
                'silver_semi_mount_40'=>$row['silver_semi_mount_40'],
                'silver_polished_60'=>$row['silver_polished_60'],
                'silver_complete_60'=>$row['silver_complete_60'],
                'silver_semi_mount_60'=>$row['silver_semi_mount_60'],
                'platinum_polished_1200'=>$row['platinum_polished_1200'],
                'platinum_complete_1200'=>$row['platinum_complete_1200'],
                'platinum_semi_mount_1200'=>$row['platinum_semi_mount_1200'],
                'platinum_polished_1600'=>$row['platinum_polished_1600'],
                'platinum_complete_1600'=>$row['platinum_complete_1600'],
                'platinum_semi_mount_1600'=>$row['platinum_semi_mount_1600']
            ]
        );
      }
    }
}
