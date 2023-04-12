<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\RingData;
use App\Helper\Helper;
use Maatwebsite\Excel\Concerns\ToModel;

class RingImport implements ToModel, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function model(array $row)
    {
       return new RingData([
            'Item_' => $row['item'],
            'Image_top'=>$row['item'].'.jpg',
            'Image_side'=>$row['item'].'side.jpg',
            'Image_side2'=>$row['item'].'set.jpg',
            'Catalogsupplement'=>$row['catalogsupplement'],
            'Page_'=>$row['page'],
            'Default_Metal'=>$row['default_metal'],
            'Default_Color'=>$row['default_color'],
            'Categories'=>$row['categories'],
            'Approx_Semimount_dwt'=>$row['approx_semi_mount_dwt'],
            'Pc_casting'=>$row['pc_casting'],
            'Stone_Breakdown'=>$row['stone_breakdown'],
            'Diamond_CTTW_provided'=>$row['diamond_cttw_provided'],
            'Diamond_quality_that_prices_are_based_at'=>$row['diamond_quality_that_prices_are_based_at'],
            'Gold_Polished_$1300'=>$row['gold_polished_1300'],
            'Gold_Complete_$1300'=>$row['gold_complete_1300'],
            'Gold_Semi_mount_$1300'=>$row['gold_semi_mount_1300'],
            'Gold_Polished_$1700'=>$row['gold_polished_1700'],
            'Gold_Complete_$1700'=>$row['gold_complete_1700'],
            'Gold_Semi_mount_$1700'=>$row['gold_semi_mount_1700'],
            'Silver_Polished_$40'=>$row['silver_polished_40'],
            'Silver_Complete_$40'=>$row['silver_complete_40'],
            'Silver_Semi_mount_$40'=>$row['silver_semi_mount_40'],
            'Silver_Polished_$60'=>$row['silver_polished_60'],
            'Silver_Complete_$60'=>$row['silver_complete_60'],
            'Silver_Semi_mount_$60'=>$row['silver_semi_mount_60'],
            'Platinum_Polished_$1200'=>$row['platinum_polished_1200'],
            'Platinum_Complete_$1200'=>$row['platinum_complete_1200'],
            'Platinum_Semi_mount_$1200'=>$row['platinum_semi_mount_1200'],
            'Platinum_Polished_$1600'=>$row['platinum_polished_1600'],
            'Platinum_Complete_$1600'=>$row['platinum_complete_1600'],
            'Platinum_Semi_mount_$1600'=>$row['platinum_semi_mount_1600']
       ]);
    }
}
