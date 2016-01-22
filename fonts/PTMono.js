var PTMono = function( path ){

  var texture = new THREE.ImageUtils.loadTexture( path );
  texture.flipY = false;
        
  return {

    texture:   texture,

    "32"  : [  1012 , 948 ,  4   ,  4   ,  -1.500  ,  1.500   ,  70.813 ], 
    "33"  : [  1006 , 532 ,  17  ,  88  ,  27.063  ,  84.125  ,  70.813 ],
    "34"  : [  986  , 774 ,  38  ,  39  ,  16.438  ,  84.125  ,  70.813 ],
    "35"  : [  926  , 944 ,  67  ,  73  ,  2.000   ,  77.313  ,  70.813 ],
    "36"  : [  557  , 530 ,  51  ,  110 ,  9.938   ,  95.938  ,  70.813 ],
    "37"  : [  878  , 426 ,  68  ,  90  ,  1.813   ,  86.313  ,  70.813 ],
    "38"  : [  621  , 207 ,  67  ,  89  ,  2.063   ,  85.500  ,  70.813 ],
    "39"  : [  542  , 697 ,  14  ,  39  ,  29.313  ,  84.125  ,  70.813 ],
    "40"  : [  683  , 867 ,  51  ,  114 ,  11.500  ,  85.563  ,  70.813 ],
    "41"  : [  620  , 534 ,  51  ,  114 ,  11.438  ,  85.563  ,  70.813 ],
    "42"  : [  620  , 964 ,  60  ,  57  ,  5.688   ,  85.938  ,  70.813 ],
    "43"  : [  72   , 752 ,  63  ,  64  ,  4.188   ,  71.750  ,  70.813 ],
    "44"  : [  403  , 834 ,  22  ,  36  ,  25.000  ,  15.875  ,  70.813 ],
    "45"  : [  866  , 1010,  44  ,  12  ,  13.750  ,  39.875  ,  70.813 ],
    "46"  : [  1002 , 512 ,  19  ,  19  ,  26.000  ,  15.875  ,  70.813 ],
    "47"  : [  557  , 426 ,  54  ,  104 ,  8.625   ,  85.563  ,  70.813 ],
    "48"  : [  427  , 846 ,  61  ,  89  ,  5.000   ,  85.563  ,  70.813 ],
    "49"  : [  143  , 529 ,  54  ,  86  ,  8.500   ,  84.125  ,  70.813 ],
    "50"  : [  214  , 106 ,  56  ,  88  ,  7.688   ,  85.563  ,  70.813 ],
    "51"  : [  143  , 353 ,  53  ,  88  ,  8.875   ,  84.125  ,  70.813 ],
    "52"  : [  498  , 104 ,  67  ,  86  ,  3.688   ,  84.125  ,  70.813 ],
    "53"  : [  143  , 441 ,  53  ,  88  ,  8.250   ,  84.125  ,  70.813 ],
    "54"  : [  870  , 104 ,  60  ,  89  ,  5.688   ,  85.563  ,  70.813 ],
    "55"  : [  214  , 370 ,  56  ,  86  ,  6.625   ,  84.125  ,  70.813 ],
    "56"  : [  285  , 449 ,  57  ,  89  ,  7.375   ,  85.563  ,  70.813 ],
    "57"  : [  930  , 104 ,  60  ,  89  ,  5.688   ,  85.563  ,  70.813 ],
    "58"  : [  993  , 944 ,  19  ,  66  ,  26.000  ,  62.250  ,  70.813 ],
    "59"  : [  986  , 838 ,  22  ,  82  ,  25.000  ,  62.313  ,  70.813 ],
    "60"  : [  143  , 280 ,  64  ,  73  ,  3.813   ,  74.813  ,  70.813 ],
    "61"  : [  683  , 981 ,  58  ,  32  ,  6.500   ,  55.500  ,  70.813 ],
    "62"  : [  356  , 946 ,  64  ,  73  ,  3.813   ,  74.813  ,  70.813 ],
    "63"  : [  427  , 0   ,  59  ,  89  ,  4.813   ,  85.500  ,  70.813 ],
    "64"  : [  743  , 638 ,  71  ,  93  ,  1.125   ,  65.625  ,  70.813 ],
    "65"  : [  683  , 318 ,  71  ,  86  ,  0.375   ,  84.125  ,  70.813 ],
    "66"  : [  285  , 888 ,  56  ,  88  ,  10.313  ,  85.125  ,  70.813 ],
    "67"  : [  356  , 207 ,  60  ,  89  ,  6.188   ,  85.500  ,  70.813 ],
    "68"  : [  845  , 0   ,  59  ,  88  ,  7.938   ,  84.875  ,  70.813 ],
    "69"  : [  143  , 702 ,  53  ,  86  ,  11.125  ,  84.125  ,  70.813 ],
    "70"  : [  72   , 194 ,  51  ,  86  ,  12.313  ,  84.125  ,  70.813 ],
    "71"  : [  356  , 385 ,  60  ,  89  ,  4.750   ,  85.500  ,  70.813 ],
    "72"  : [  285  , 104 ,  60  ,  86  ,  5.563   ,  84.125  ,  70.813 ],
    "73"  : [  285  , 190 ,  60  ,  86  ,  5.563   ,  84.125  ,  70.813 ],
    "74"  : [  143  , 788 ,  52  ,  87  ,  8.375   ,  84.125  ,  70.813 ],
    "75"  : [  493  , 914 ,  64  ,  86  ,  8.500   ,  84.125  ,  70.813 ],
    "76"  : [  214  , 823 ,  55  ,  86  ,  9.125   ,  84.125  ,  70.813 ],
    "77"  : [  285  , 276 ,  60  ,  86  ,  5.563   ,  84.125  ,  70.813 ],
    "78"  : [  285  , 627 ,  58  ,  86  ,  6.750   ,  84.125  ,  70.813 ],
    "79"  : [  557  , 818 ,  63  ,  89  ,  4.188   ,  85.500  ,  70.813 ],
    "80"  : [  214  , 736 ,  55  ,  87  ,  10.313  ,  84.750  ,  70.813 ],
    "81"  : [  743  , 426 ,  63  ,  106 ,  4.188   ,  85.563  ,  70.813 ],
    "82"  : [  285  , 362 ,  59  ,  87  ,  10.313  ,  85.063  ,  70.813 ],
    "83"  : [  963  , 0   ,  58  ,  89  ,  7.313   ,  85.500  ,  70.813 ],
    "84"  : [  427  , 494 ,  65  ,  86  ,  3.250   ,  84.125  ,  70.813 ],
    "85"  : [  726  , 0   ,  60  ,  87  ,  5.563   ,  84.125  ,  70.813 ],
    "86"  : [  946  , 426 ,  71  ,  86  ,  0.125   ,  84.125  ,  70.813 ],
    "87"  : [  754  , 318 ,  71  ,  86  ,  0.250   ,  84.125  ,  70.813 ],
    "88"  : [  894  , 318 ,  70  ,  86  ,  0.813   ,  84.125  ,  70.813 ],
    "89"  : [  806  , 426 ,  72  ,  86  ,  -0.438  ,  84.125  ,  70.813 ],
    "90"  : [  665  , 0   ,  61  ,  86  ,  5.000   ,  84.125  ,  70.813 ],
    "91"  : [  493  , 697 ,  49  ,  113 ,  16.063  ,  84.125  ,  70.813 ],
    "92"  : [  620  , 648 ,  55  ,  104 ,  8.125   ,  85.563  ,  70.813 ],
    "93"  : [  493  , 584 ,  49  ,  113 ,  6.625   ,  84.125  ,  70.813 ],
    "94"  : [  0    , 614 ,  66  ,  52  ,  2.625   ,  85.438  ,  70.813 ],
    "95"  : [  937  , 622 ,  61  ,  12  ,  5.125   ,  -14.438 ,  70.813 ],
    "96"  : [  894  , 404 ,  24  ,  21  ,  21.625  ,  86.500  ,  70.813 ],
    "97"  : [  0    , 357 ,  59  ,  65  ,  7.375   ,  61.500  ,  70.813 ],
    "98"  : [  824  , 207 ,  67  ,  87  ,  -1.313  ,  84.125  ,  70.813 ],
    "99"  : [  866  , 945 ,  60  ,  65  ,  5.563   ,  61.938  ,  70.813 ],
    "100" : [  427  , 317 ,  66  ,  88  ,  5.125   ,  84.125  ,  70.813 ],
    "101" : [  806  , 944 ,  59  ,  65  ,  5.938   ,  61.938  ,  70.813 ],
    "102" : [  143  , 615 ,  53  ,  87  ,  8.875   ,  84.875  ,  70.813 ],
    "103" : [  285  , 538 ,  57  ,  89  ,  6.625   ,  61.500  ,  70.813 ],
    "104" : [  427  , 580 ,  65  ,  86  ,  -1.000  ,  84.125  ,  70.813 ],
    "105" : [  143  , 193 ,  54  ,  87  ,  10.875  ,  85.063  ,  70.813 ],
    "106" : [  356  , 834 ,  47  ,  112 ,  5.438   ,  85.125  ,  70.813 ],
    "107" : [  565  , 104 ,  67  ,  86  ,  1.313   ,  84.125  ,  70.813 ],
    "108" : [  72   , 106 ,  50  ,  88  ,  6.750   ,  84.125  ,  70.813 ],
    "109" : [  72   , 434 ,  65  ,  64  ,  3.313   ,  61.938  ,  70.813 ],
    "110" : [  72   , 688 ,  63  ,  64  ,  0.625   ,  61.938  ,  70.813 ],
    "111" : [  72   , 945 ,  61  ,  65  ,  5.250   ,  61.938  ,  70.813 ],
    "112" : [  957  , 207 ,  66  ,  88  ,  1.000   ,  61.938  ,  70.813 ],
    "113" : [  285  , 713 ,  57  ,  87  ,  5.563   ,  61.438  ,  70.813 ],
    "114" : [  0    , 293 ,  61  ,  64  ,  6.313   ,  61.688  ,  70.813 ],
    "115" : [  0    , 486 ,  55  ,  65  ,  8.375   ,  61.938  ,  70.813 ],
    "116" : [  743  , 940 ,  62  ,  78  ,  2.188   ,  74.813  ,  70.813 ],
    "117" : [  143  , 875 ,  69  ,  64  ,  1.438   ,  60.500  ,  70.813 ],
    "118" : [  72   , 562 ,  64  ,  63  ,  3.563   ,  60.563  ,  70.813 ],
    "119" : [  0    , 106 ,  72  ,  63  ,  -0.375  ,  60.563  ,  70.813 ],
    "120" : [  72   , 625 ,  64  ,  63  ,  3.875   ,  60.500  ,  70.813 ],
    "121" : [  493  , 409 ,  64  ,  87  ,  3.875   ,  60.563  ,  70.813 ],
    "122" : [  0    , 551 ,  55  ,  63  ,  8.438   ,  60.563  ,  70.813 ],
    "123" : [  683  , 538 ,  55  ,  113 ,  7.938   ,  84.250  ,  70.813 ],
    "124" : [  1008 , 838 ,  12  ,  102 ,  29.875  ,  84.125  ,  70.813 ],
    "125" : [  683  , 651 ,  55  ,  113 ,  7.938   ,  84.250  ,  70.813 ],
    "126" : [  946  , 512 ,  56  ,  19  ,  7.688   ,  51.063  ,  70.813 ],
    "160" : [  1012 , 944 ,  4   ,  4   ,  -1.500  ,  1.500   ,  70.813 ],
    "161" : [  990  , 104 ,  17  ,  87  ,  27.063  ,  61.813  ,  70.813 ],
    "162" : [  214  , 909 ,  55  ,  86  ,  8.313   ,  72.313  ,  70.813 ],
    "163" : [  285  , 800 ,  56  ,  88  ,  7.563   ,  85.563  ,  70.813 ],
    "164" : [  72   , 882 ,  63  ,  63  ,  4.125   ,  71.938  ,  70.813 ],
    "165" : [  688  , 207 ,  68  ,  86  ,  1.813   ,  84.125  ,  70.813 ],
    "166" : [  671  , 534 ,  12  ,  102 ,  29.875  ,  84.125  ,  70.813 ],
    "167" : [  72   , 280 ,  49  ,  89  ,  11.250  ,  85.500  ,  70.813 ],
    "168" : [  806  , 620 ,  43  ,  17  ,  13.938  ,  84.625  ,  70.813 ],
    "169" : [  72   , 498 ,  64  ,  64  ,  3.563   ,  66.563  ,  70.813 ],
    "170" : [  986  , 731 ,  38  ,  43  ,  16.813  ,  85.063  ,  70.813 ],
    "171" : [  0    , 231 ,  63  ,  62  ,  4.375   ,  62.688  ,  70.813 ],
    "172" : [  557  , 998 ,  54  ,  26  ,  8.875   ,  47.750  ,  70.813 ],
    "173" : [  878  , 516 ,  32  ,  12  ,  19.500  ,  39.875  ,  70.813 ],
    "174" : [  143  , 939 ,  66  ,  66  ,  2.625   ,  86.000  ,  70.813 ],
    "175" : [  806  , 1009,  38  ,  11  ,  16.438  ,  77.375  ,  70.813 ],
    "176" : [  0    , 933 ,  37  ,  37  ,  17.250  ,  85.500  ,  70.813 ],
    "177" : [  0    , 666 ,  54  ,  62  ,  8.875   ,  81.063  ,  70.813 ],
    "178" : [  0    , 835 ,  45  ,  54  ,  11.938  ,  96.813  ,  70.813 ],
    "179" : [  0    , 728 ,  47  ,  54  ,  6.813   ,  95.875  ,  70.813 ],
    "180" : [  986  , 813 ,  24  ,  21  ,  21.625  ,  86.500  ,  70.813 ],
    "181" : [  604  , 0   ,  61  ,  86  ,  8.438   ,  60.563  ,  70.813 ],
    "182" : [  214  , 634 ,  47  ,  102 ,  11.938  ,  84.125  ,  70.813 ],
    "183" : [  986  , 920 ,  19  ,  19  ,  26.000  ,  45.438  ,  70.813 ],
    "184" : [  403  , 870 ,  23  ,  28  ,  23.938  ,  1.500   ,  70.813 ],
    "185" : [  0    , 782 ,  46  ,  53  ,  13.563  ,  96.000  ,  70.813 ],
    "186" : [  0    , 889 ,  40  ,  44  ,  15.625  ,  85.563  ,  70.813 ],
    "187" : [  0    , 169 ,  63  ,  62  ,  4.375   ,  62.688  ,  70.813 ],
    "188" : [  493  , 320 ,  64  ,  89  ,  2.625   ,  85.688  ,  70.813 ],
    "189" : [  427  , 405 ,  65  ,  89  ,  2.625   ,  85.688  ,  70.813 ],
    "190" : [  557  , 640 ,  63  ,  89  ,  3.688   ,  85.688  ,  70.813 ],
    "191" : [  545  , 0   ,  59  ,  89  ,  7.813   ,  61.938  ,  70.813 ],
    "192" : [  214  , 0   ,  71  ,  106 ,  0.375   ,  104.188 ,  70.813 ],
    "193" : [  143  , 0   ,  71  ,  106 ,  0.313   ,  104.188 ,  70.813 ],
    "194" : [  72   , 0   ,  71  ,  106 ,  0.375   ,  104.313 ,  70.813 ],
    "195" : [  427  , 104 ,  71  ,  103 ,  0.375   ,  100.625 ,  70.813 ],
    "196" : [  356  , 0   ,  71  ,  104 ,  0.375   ,  102.063 ,  70.813 ],
    "197" : [  285  , 0   ,  71  ,  104 ,  0.250   ,  102.188 ,  70.813 ],
    "198" : [  756  , 207 ,  68  ,  86  ,  0.875   ,  84.125  ,  70.813 ],
    "199" : [  683  , 426 ,  60  ,  112 ,  6.188   ,  85.563  ,  70.813 ],
    "200" : [  964  , 318 ,  53  ,  106 ,  11.125  ,  104.188 ,  70.813 ],
    "201" : [  620  , 858 ,  53  ,  106 ,  11.125  ,  104.188 ,  70.813 ],
    "202" : [  620  , 752 ,  53  ,  106 ,  11.125  ,  104.313 ,  70.813 ],
    "203" : [  493  , 810 ,  53  ,  104 ,  11.125  ,  102.063 ,  70.813 ],
    "204" : [  806  , 838 ,  60  ,  106 ,  5.563   ,  104.188 ,  70.813 ],
    "205" : [  926  , 731 ,  60  ,  106 ,  5.563   ,  104.188 ,  70.813 ],
    "206" : [  926  , 838 ,  60  ,  106 ,  5.563   ,  104.313 ,  70.813 ],
    "207" : [  877  , 532 ,  60  ,  104 ,  5.563   ,  102.063 ,  70.813 ],
    "208" : [  806  , 532 ,  71  ,  88  ,  -0.438  ,  84.875  ,  70.813 ],
    "209" : [  683  , 764 ,  58  ,  103 ,  6.750   ,  100.688 ,  70.813 ],
    "210" : [  620  , 318 ,  63  ,  108 ,  4.188   ,  104.188 ,  70.813 ],
    "211" : [  557  , 318 ,  63  ,  108 ,  4.188   ,  104.188 ,  70.813 ],
    "212" : [  620  , 426 ,  63  ,  108 ,  4.188   ,  104.313 ,  70.813 ],
    "213" : [  743  , 731 ,  63  ,  104 ,  4.188   ,  100.625 ,  70.813 ],
    "214" : [  743  , 532 ,  63  ,  106 ,  4.188   ,  102.063 ,  70.813 ],
    "215" : [  285  , 976 ,  46  ,  46  ,  12.750  ,  62.563  ,  70.813 ],
    "216" : [  814  , 638 ,  71  ,  89  ,  0.125   ,  85.625  ,  70.813 ],
    "217" : [  866  , 838 ,  60  ,  107 ,  5.563   ,  104.188 ,  70.813 ],
    "218" : [  866  , 731 ,  60  ,  107 ,  5.563   ,  104.188 ,  70.813 ],
    "219" : [  806  , 731 ,  60  ,  107 ,  5.563   ,  104.313 ,  70.813 ],
    "220" : [  743  , 835 ,  60  ,  105 ,  5.563   ,  102.063 ,  70.813 ],
    "221" : [  0    , 0   ,  72  ,  106 ,  -0.438  ,  104.188 ,  70.813 ],
    "222" : [  214  , 194 ,  57  ,  86  ,  9.250   ,  84.125  ,  70.813 ],
    "223" : [  891  , 207 ,  66  ,  88  ,  2.813   ,  84.813  ,  70.813 ],
    "224" : [  356  , 474 ,  59  ,  90  ,  7.375   ,  86.500  ,  70.813 ],
    "225" : [  356  , 564 ,  59  ,  90  ,  7.375   ,  86.500  ,  70.813 ],
    "226" : [  632  , 104 ,  59  ,  91  ,  7.375   ,  87.938  ,  70.813 ],
    "227" : [  486  , 0   ,  59  ,  89  ,  7.375   ,  85.750  ,  70.813 ],
    "228" : [  904  , 0   ,  59  ,  88  ,  7.375   ,  84.625  ,  70.813 ],
    "229" : [  691  , 104 ,  59  ,  91  ,  7.375   ,  88.125  ,  70.813 ],
    "230" : [  72   , 369 ,  67  ,  65  ,  1.938   ,  61.938  ,  70.813 ],
    "231" : [  356  , 296 ,  60  ,  89  ,  5.563   ,  61.938  ,  70.813 ],
    "232" : [  356  , 654 ,  59  ,  90  ,  5.938   ,  86.500  ,  70.813 ],
    "233" : [  356  , 744 ,  59  ,  90  ,  5.938   ,  86.500  ,  70.813 ],
    "234" : [  750  , 104 ,  59  ,  91  ,  5.938   ,  87.875  ,  70.813 ],
    "235" : [  786  , 0   ,  59  ,  88  ,  5.938   ,  84.563  ,  70.813 ],
    "236" : [  214  , 456 ,  54  ,  89  ,  15.750  ,  86.500  ,  70.813 ],
    "237" : [  214  , 545 ,  54  ,  89  ,  10.875  ,  86.500  ,  70.813 ],
    "238" : [  214  , 280 ,  54  ,  90  ,  10.875  ,  87.938  ,  70.813 ],
    "239" : [  143  , 106 ,  54  ,  87  ,  11.125  ,  84.625  ,  70.813 ],
    "240" : [  557  , 729 ,  63  ,  89  ,  5.000   ,  85.688  ,  70.813 ],
    "241" : [  493  , 496 ,  63  ,  88  ,  0.625   ,  85.813  ,  70.813 ],
    "242" : [  427  , 756 ,  61  ,  90  ,  5.250   ,  86.500  ,  70.813 ],
    "243" : [  427  , 666 ,  61  ,  90  ,  5.250   ,  86.500  ,  70.813 ],
    "244" : [  557  , 907 ,  61  ,  91  ,  5.250   ,  87.875  ,  70.813 ],
    "245" : [  427  , 935 ,  61  ,  89  ,  5.250   ,  85.750  ,  70.813 ],
    "246" : [  809  , 104 ,  61  ,  88  ,  5.250   ,  84.563  ,  70.813 ],
    "247" : [  0    , 422 ,  58  ,  64  ,  6.500   ,  72.438  ,  70.813 ],
    "248" : [  72   , 816 ,  61  ,  66  ,  5.250   ,  62.313  ,  70.813 ],
    "249" : [  937  , 532 ,  69  ,  90  ,  1.438   ,  86.500  ,  70.813 ],
    "250" : [  954  , 638 ,  69  ,  90  ,  1.438   ,  86.500  ,  70.813 ],
    "251" : [  885  , 638 ,  69  ,  91  ,  1.438   ,  87.875  ,  70.813 ],
    "252" : [  825  , 318 ,  69  ,  88  ,  1.438   ,  84.563  ,  70.813 ],
    "253" : [  493  , 207 ,  64  ,  113 ,  3.875   ,  86.500  ,  70.813 ],
    "254" : [  427  , 207 ,  66  ,  110 ,  0.938   ,  84.125  ,  70.813 ],
    "255" : [  557  , 207 ,  64  ,  111 ,  3.875   ,  84.625  ,  70.813 ],
    "256" : [  356  , 104 ,  71  ,  103 ,  0.375   ,  101.000 ,  70.813 ] 

  }

}