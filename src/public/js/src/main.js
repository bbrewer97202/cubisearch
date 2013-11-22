var app = app || {};

_.extend(app, Backbone.Events);

app.AvailableSets = Backbone.Model.extend({

    //todo: something better
    //from: http://sourceforge.net/p/cubiculus/code/258/tree//cubiculus-highlighter-chrome/trunk/src/chrome-extension/lego-set-numbers.js#l37
    defaults: {
        knownLegoSetsNumbers: [10013,10014,10015,10016,10017,10019,10069,10155,10178,10185,10187,10188,10189,10193,10194,10195,10196,10197,10198,10199,10210,10211,10212,10213,10214,10215,10216,10217,10218,10219,10220,10221,10222,10223,10224,10225,10226,10227,10228,10229,10230,10231,10232,10233,10234,10235,10236,10237,10240,10241,10243,10285,10500,10501,10502,10503,10504,10505,10506,10507,10508,10509,10510,10511,10512,10513,10514,10515,10516,10517,10518,10519,10520,10531,10550,10552,10553,10554,10555,10556,10557,10558,10559,10560,10561,10655,10656,10657,10659,10660,10661,10662,10663,10664,10937,11999,1210,1255,1263,137,1458,1462,1478,1479,1484,1490,1498,1499,1509,151,1526,1549,1555,1557,1572,1580,1593,1620,1632,1665,1682,1694,1714,1761,1792,1819,1843,1858,1875,1876,1887,1916,1924,1954,1968,20200,20201,20214,20215,20216,20217,2063,2065,2067,2068,21000,21002,21003,21004,21005,21006,21007,21008,21009,21010,21011,21012,21013,21014,21015,21016,21017,21018,21050,21101,21102,21103,21105,21106,2112,2114,2115,2116,21200,21201,2126,2141,2142,2143,2144,2145,2166,2170,2171,2172,2173,2174,2175,2182,2183,2191,2192,2193,2194,2198,2232,2233,2235,2236,2254,2255,2256,2257,2258,2259,2260,2263,2282,2283,2304,2504,2505,2506,2507,2508,2509,2516,2518,2519,2520,2521,2554,2556,2585,2717,2734,2735,277,2824,2850828,2850829,2850855,2850856,2850857,2850868,2851070,2851134,2851185,2851190,2851193,2851195,2851198,2852724,2852725,2852726,2853216,2853402,2853504,2853508,2853586,2853587,2853591,2853592,2853593,2853662,2855040,2855057,2855113,28553592,2856077,2856080,2856081,2856089,2856128,2856129,2856130,2856134,2856195,2856198,2856203,2856205,2856206,2856217,2856219,2856221,2856222,2856227,2856236,2856238,2856239,2856241,2856252,2856354,2856451,2856453,2856454,2856457,2856458,2856735,3000,30002,30055,3013,30242,305,3061,3063,3065,31000,31001,31002,31003,31004,31005,31006,31007,31008,31009,31010,31011,31012,313,31313,315,316,3177,3178,3179,3180,3181,3182,3183,3184,3185,3186,3187,3188,3189,3219,3221,3222,3225,328,329,330,331,3315,3316,333,334,336,3365,3366,3367,3368,338,340,341,342,343,3438,344,3442,345,3450,3451,346,347,349,350,354,356,358,361,3648,3658,3661,3677,372,3723,3731,374,375,376,377,3774,3775,379,381,3815,3816,3817,3818,382,3833,3834,3835,3836,3837,3838,3839,3840,3841,3842,3843,3844,3845,3846,3847,3848,3849,3850,3851,3852,3853,3854,3855,3856,3857,3858,3859,3860,3861,3862,3863,3864,3865,3866,3874,390,391,3913,3920,3930,3931,3932,3933,3934,3935,3936,3937,3938,3939,3942,395,40008,40009,40010,40013,40017,40020,40024,40028,40029,40032,4005,40051,40052,40053,40054,40055,40056,40057,40080,4010,4011,4020,4021,4030,4031,4096,4097,4098,41000,41001,41002,41003,41004,41005,41006,41007,41008,41009,4101,41010,41011,41013,41015,41016,41017,41018,41019,41020,41021,41022,41023,41024,41025,4181,4182,4183,4184,4191,4192,4193,4194,4195,41999,420,4200,42000,42001,42002,42004,42005,42006,42007,42008,42009,4201,42010,42011,4202,4203,4204,4205,4206,4207,4208,4209,4270902,44000,44001,44002,44003,44004,44005,44006,44007,44008,44009,4401,44010,44011,44012,44013,44014,4402,442,4427,4428,4429,4430,4431,4432,4433,4434,4435,4436,4437,4438,4439,4440,4441,4484,4485,4486,4487,4488,4489,4492,4493,4494,4495,4505,4507,4512,4515,452,4520,4525,4526,4527,4528,4529,4530,4531,4532,4536,4537,4539,454,4543,4544,4546,4547,4548,4549,4551,4554,4555,4558,4563,4565,4597,462,4623,4624,4625,4626,4627,4628,4629,4630,4631,4632,4635,4636,4637,4641,4642,4643,4644,4645,4659018,4736,4737,4738,4741,483,4838,4840,4841,4842,4865,4866,4867,487,4886,493,4956,4962,497,4977,4993,4994,4995,4996,5000018,5000020,5000021,5000027,5000066,5000067,5000069,5000135,5000141,5000142,5000143,5000144,5000203,5000206,5000207,5000208,5000209,5000210,5000211,5000212,5000214,5000215,5000216,5000221,5000236,5000248,5000249,5000252,5000253,50003,50006,5000668,5000669,5000670,5000671,5000672,5000728,5001,5001050,5001090,5001091,5001092,5001093,5001094,5001095,5001096,5001097,50011,5001125,5001126,5001127,5001128,5001129,5001130,5001132,5001133,5001134,5001135,5001136,5001159,5001160,5001164,5001252,5001261,5001270,5001273,5001283,5001284,5001307,5001308,5001309,5001310,5001311,5001319,5001323,5001351,5001353,5001354,5001355,5001356,5001357,5001358,5001366,5001368,5001369,5001370,5001371,5001373,5001374,5001375,5001376,5001377,5001378,5001379,5001380,5001382,5001383,5001384,5001385,5001386,5001387,5001388,5001632,5001634,5001925,5002,5002032,5002033,5002038,5002039,5002040,5002194,5002195,5002198,5002201,5002202,5002207,5002208,5002209,5002210,5002211,5002212,5002417,5002420,5002421,5002422,5002423,5002424,5002467,5002468,5002470,5002471,5002506,5002518,5002520,5002664,5002665,5002666,5002670,5002671,5002672,5002673,5002674,5002675,5002676,5002677,5002678,5002679,5002772,5002773,5002774,5002779,5002780,5002785,5002801,5002803,5002804,5002805,5002814,5002816,5002817,5002818,5002819,5002820,5002821,5002827,5002828,5002887,5002888,5002889,5002900,5002901,5003,5005,5007,5009,5010,5011,5021,5022,5023,5024,5025,5026,5027,5028,5030,5031,5032,5033,5034,5035,5036,5037,5038,5039,5040,5041,5042,5043,5044,5045,5046,5047,5048,5049,5050,5051,5052,5053,5054,5055,5056,5057,5058,5059,5060,5061,5062,5063,5064,5065,5066,5067,5068,5069,5070,5071,5072,5073,5074,5075,5076,5077,5078,5079,5080,5081,5082,5083,5084,5085,5087,5088,5092,5093,5094,5095,5096,5097,5098,5099,5100,5101,5103,5104,5105,5106,5107,5108,5109,5110,5111,5112,5114,5115,5116,5117,5118,5119,5120,5122,5125,5126,5127,5128,5129,5130,5131,5132,5133,5134,5135,5136,5137,5150,5153,5154,5155,5156,5157,5158,5159,5160,5161,5162,5163,5164,5165,5166,5168,5169,5171,5172,5173,5174,5175,5176,5177,5178,5180,5181,5182,5183,5184,5185,5186,5187,5188,5189,5190,5191,5192,5193,5194,5195,5196,5197,5198,5199,5200,5201,5202,5225,5226,5227,5228,5229,5231,5233,5234,5235,5237,5238,5242,5243,5244,5249,5250,5251,5252,5263,5267,5268,5269,5271,5272,5273,5274,5275,5276,5277,5278,5279,5280,5281,5282,5283,5284,5285,5287,5288,5289,5290,5291,5292,5293,5294,5295,5300,5301,5302,5303,5304,5305,5306,5307,5308,5309,5310,5311,5382,5383,5384,5386,5387,5391,5392,5393,5394,5395,5396,5397,5398,5399,5402,5403,5405,5413,5416,5486,5488,5489,5497,55000,5506,5507,5508,5509,5510,5511,5512,5521,5529,5538,5539,5541,5542,5544,5546,5547,5548,5549,5560,5571,5580,5585,5590,5592,5593,5594,5595,5601,5602,5603,5604,5605,5608,5609,5622,5623,5632,5633,5634,5635,5636,5637,5638,5639,5640,5641,5643,5644,5645,5646,5647,5648,5649,5650,5651,5652,5653,5654,5655,5656,5657,5658,5659,5678,5679,5680,5681,5682,5683,5684,5685,5691,5695,5696,5748,5749,5761,5762,5763,5764,5765,5766,5767,5770,5771,5793,5794,5795,5813,5814,5815,5816,5817,5818,5819,5828,5829,5839,5864,5865,5866,5867,5868,5882,5883,5884,5885,5886,5887,5888,5891,5892,5893,5898,5899,5929,5930,5931,5932,5933,5945,5946,5947,5969,5970,5971,5972,5973,5974,5981,5982,5983,5984,5985,6000,60000,60001,60002,60003,60004,60005,60006,60007,60008,60009,60010,60011,60012,60013,60014,60015,60016,60017,60018,60019,60020,60021,60022,60023,60024,60025,60026,60027,601,6016,6018,6018031,603,6034,6039,6042,6049,605,6051,6052,6053,6054,6059,606,6066,607,6077,608,6081,6085,609,610,6103,6117,6118,6119,6130,6131,6132,6133,6134,6136,6137,6138,6141,6143,6144,6146,6151,6152,6153,6154,6156,6157,6158,6161,6166,6168,6169,617,6171,6172,6173,6176,6177,6194,620,6200,6201,6202,6203,621,6212,6216,6217,6218,622,6221,6222,6223,6227,6228,6229,623,6230,6231,625,626,628,6282,6283,6293,630,6302,6306,6309,6310,6311,6312,6313,6315,6316,6317,6339,6341,6347,6349,6351,6352,6353,6354,6355,6356,6357,6358,6359,6360,6361,6362,6363,6364,6365,6366,6367,6368,6369,6370,6373,6374,6375,6378,6379,6380,6381,6382,6384,6385,6386,6388,6389,6392,6394,6395,640,6430,644,6440,645,6450,646,647,6480,6481,6482,649,650,6501,6505,6506,6507,6508,6509,6510,6511,6512,6517,6518,6521,6522,6523,6526,6527,6528,6529,6530,6531,6532,6533,6536,6537,6538,6540,6541,6542,655,659,6590,6592,6593,6601,6603,6606,6607,6609,6611,6621,6622,6623,6624,6627,6628,6630,6631,6634,6641,6642,6644,6645,6646,6647,6651,6652,6653,6655,6656,6657,6659,6660,6661,6667,6668,6669,6670,6671,6672,6673,6674,6675,6676,6678,6679,6681,6682,6683,6684,6685,6686,6687,6688,6689,6690,6691,6693,6694,6698,6699,6704,6710,6741,6742,6743,6745,6747,675,6750,6751,6752,6753,6754,6758,6759,6760,6780,6781,6783,6784,6785,6801,6802,6803,6804,6805,6806,6807,6808,6809,6810,6811,6812,6813,6815,6820,6821,6822,6823,6824,6825,6826,6827,683,6831,6832,6833,6835,6841,6842,6845,6846,6847,6848,6851,6852,6857,6858,6860,6861,6862,6863,6864,6865,6866,6867,6868,6869,687,6870,6871,6872,6873,6874,6876,6877,6878,6879,688,6880,6881,6882,6883,6886,6887,6890,6891,6892,6894,6895,6896,6897,6901,691,6910,6911,6912,6913,6914,6915,6918,6921,6923,6926,6928,6929,6930,6931,6933,6939,6940,6941,6950,6951,6952,6954,6955,6956,6957,697,6970,6971,6972,6973,6980,6981,6982,6984,6986,6987,6988,6989,70000,70001,70002,70003,70004,70005,70006,70007,70008,70009,70010,70011,70012,70013,70014,70100,70101,70102,70103,70104,70105,70106,70107,70108,70109,70110,70111,70112,70113,70114,70115,70200,70201,70202,70203,70204,70205,70400,70401,70402,70403,70404,7049,7050,70500,70501,70502,70503,70504,70505,7051,7052,7065,7066,7067,70700,70701,70702,70703,70704,70705,70706,70707,70708,70709,7097,71000,71001,71002,7116,7117,7127,7135,7136,7137,7138,7145,7147,7148,7156,7157,7158,7160,7162,7164,7165,7167,7168,7169,7170,7179,7181,7187,7188,7189,7191,7206,7207,7208,7213,723,7235,7236,7239,7241,7245,7279,7280,7281,7285,7286,7287,7288,7291,7292,7305,7306,7307,7325,7326,7327,7345,7346,7347,735,7498,7499,75000,75001,75002,75003,75004,75005,75006,75007,75008,75009,75010,75011,75012,75013,75014,75015,75016,75017,75018,75019,75020,75021,75022,75023,75024,75025,7553,7566,7567,7569,757,7570,7571,7572,7573,758,7583,7585,7586,7587,759,7590,7591,7592,7593,7594,7595,7596,7597,7598,7599,760,76000,76001,76002,76003,76004,76005,76006,76007,76008,76009,7630,7631,7632,7634,7635,7636,7637,7638,7639,7641,7647,7684,7710,7718,7725,7741,7743,7744,7745,7746,7747,7748,7749,7752,7753,7754,7760,7778,7789,7810,7814,7817,7818,7819,7820,7821,7824,7835,7839,7854,7855,7856,7863,7868,7869,7877,7879,7895,79000,79001,79002,79003,79004,79005,79006,79007,79008,79010,79100,79101,79102,79103,79104,79105,79106,79107,79108,79109,79110,79111,7913,7914,7915,7929,7930,7931,7936,7937,7938,7939,7942,7946,7947,7948,7949,7950,7952,7953,7955,7956,7957,7958,7959,7961,7962,7964,7965,7967,7968,7971,7976,7977,7978,7984,7985,8014,8015,8016,8017,8018,8019,8036,8037,8038,8039,8041,8043,8045,8046,8047,8048,8049,8051,8052,8053,8056,8057,8058,8059,8060,8061,8065,8066,8067,8068,8069,8070,8071,8072,8073,8075,8076,8077,8078,8079,8080,8081,8083,8084,8085,8086,8087,8088,8089,8091,8092,8093,8095,8096,8097,8098,8099,8109,8110,8128,8129,8169,8183,8185,8188,8189,8190,8191,8192,8193,8194,8200,8201,8206,8214,8221,8227,8228,8231,8256,8258,8259,8260,8261,8262,8263,8264,8265,8293,8297,8301,8302,8303,8304,8398,8401,8402,8403,8404,8409,8410,8411,8423,8424,8426,8458,846,8480,8484,8486,8487,850150,850154,850353,850355,850416,850417,850421,850423,850425,850426,850432,850442,850443,850445,850446,850447,850448,850449,850451,850452,850453,850455,850486,850487,850506,850507,850514,850515,850516,850517,850529,850581,850591,850596,850597,850598,850602,850607,850608,850609,850611,850612,850614,850615,850617,850618,850622,850628,850632,850634,850635,850636,850637,850638,850639,850640,850641,850642,850643,850644,850646,850648,850653,850656,850657,850663,850664,850666,850670,850673,850674,850680,850681,850682,850686,850702,850705,850771,850775,850776,850777,850779,850781,850789,850791,850794,850797,850798,850800,850807,850808,850813,850814,850815,850838,850839,850840,850850,850851,850852,851091,851464,851659,8517,8518,8519,852098,852130,852513,852550,852552,852554,852555,852678,852769,852771,8528,852820,852837,852838,852841,852856,8529,852921,852922,852942,852945,852947,852949,852950,852954,852955,852956,852957,852981,852982,852983,852985,852986,852987,852998,853037,853038,853084,853085,853086,853087,853088,853089,853091,853092,853096,853097,853098,853099,853100,853101,853102,853105,853106,853108,853114,853116,853118,853125,853127,853129,853130,853144,853146,853165,853167,853168,853175,853176,853187,853188,853189,853191,853195,853200,853201,853213,853219,853240,853301,853340,853344,853345,853346,853353,853355,853358,853373,853375,853378,853393,853395,853401,853402,853403,853404,853405,853406,853409,853410,853412,853413,853414,853421,853429,853430,853433,8547,8639,8677,8678,8679,8683,8684,8712,88000,880002,88002,88003,88004,8803,8804,8805,8810,8815,8820,8825,8827,8830,8831,8833,8835,8838,8840,885,8850,8853,8855,886,8863,8864,8865,8866,8867,8869,8870,8871,8878,8879,8880,8881,8882,8883,8884,8885,8886,8887,889,8891,8896,8897,8898,8899,8909,891,8962,8963,8964,9092,9093,9094,9095,918,920,9222,9247,9348,9349,9387,9390,9391,9392,9393,9394,9395,9396,9397,9398,9440,9441,9442,9443,9444,9445,9446,9447,9448,9449,9450,9455,9456,9457,9461,9462,9463,9464,9465,9466,9467,9468,9469,9470,9471,9472,9473,9474,9476,9478,9479,9480,9481,9483,9484,9485,9486,9488,9489,9490,9491,9492,9493,9494,9495,9496,9497,9498,9499,9500,9509,9515,9516,9525,9526,9551,9552,9553,9554,9555,9556,9557,9558,9561,9562,9563,9564,9566,9569,9570,9571,9572,9573,9574,9579,9590,9591,9674,9675,9676,9677,9678,9679,9693,9694,9833,9841,9842,9843,9844,9845,9846,9847]
    }
});

app.Set = Backbone.Model.extend({

    defaults: {
        id: "",
        boxNo: "",
        legoModelName: "",
        description: "",
        imageURL: "",
        released: "",
        pieces: "",
        images: []
    },
    parse: function(response){
        return response.response[0];
    },    
    url: function() {
        return '/api/set/' + this.id;
    }
});

app.SetView = Backbone.View.extend({
    tagName: "div",

    initialize: function() {

        //a search from another view was started, clear the view
        app.on("search:start", this.onSearchStart, this);

        //a search from another view was success, update the view
        //with the passed set
        app.on("search:success", this.onSearchSuccess, this);

        //handle search errors
        app.on("search:error", this.onSearchError, this);

    },

    template: $('#set-template').html(),
    render: function() {
        this.$el.html(_.template(this.template, this.model.attributes));
        return this;
    },

    onSearchStart: function() {
        this.$el.html('<div class="loader"><img src="images/loader.gif" width="80" height="80" alt="Loading..."></div>');
    },

    onSearchSuccess: function(set) {
        this.model = set;
        this.render();        
    },

    onSearchError: function(id) {
        this.$el.html('<div class="error">An error occurred searching for this set.  Please check the set number and try again.');
    }
});

app.SearchView = Backbone.View.extend({

    tagName: "div",
    template: $('#controls-template').html(),
    events: {
        'submit #searchSetsForm': 'onSearchSubmit'
    },
    initialize: function() {

        this.render();

        //the set selector view may broadcast a change, and if so
        //use that provided value as the new search value
        app.on("setselection:user", function(id) {
            $('#setNumberInput').val(id);
            $('#searchSetsForm').submit();
        }, this);

        //handle search start event
        app.on("search:start", this.onSearchStart, this);

        //handle search success event
        app.on("search:success", this.onSearchSuccess, this);        

        //handle search error event
        app.on("search:error", this.onSearchError, this);

    },
    render: function() {
        this.$el.html(_.template(this.template));
        return this;
    },
    
    onSearchSubmit: function(e) {

        e.preventDefault();

        var id = $('#setNumberInput').val();    

        if (id && (id.length > 0)) {     

            //broadcast the start of a new search
            app.trigger("search:start", id);
            
            var set = new app.Set({ id: id });
            set.fetch({
                success: function(e) {

                    if (set.get('boxNo') !== "") {

                        //we want to update the imageUrl values here with a larger size than the one returned from the api
                        var imageUrl = set.get('imageUrl').split("?")[0];
                        imageUrl += "?w=960&h=600";
                        set.set('imageUrl', imageUrl);

                        app.trigger("search:success", set);

                    } else {
                        app.trigger("search:error", id);
                    }
                },
                error: function(e) {
                    app.trigger("search:error", id);
                }
            });
        } else {
            app.trigger("search:reset");
        }
    },

    onSearchStart: function() {
        $('#setNumberSubmit').attr('disabled', 'disabled');
    },

    onSearchSuccess: function(set) {
        $('#setNumberSubmit').prop('disabled', false);
    },

    onSearchError: function(id) {
        $('#setNumberSubmit').prop('disabled', false);
    }

});

app.AvailableSetsView = Backbone.View.extend({

    tagName: "div",
    template: $('#availableSets-template').html(),
    events: {
        'change #availableSets': 'onAvailableSetsChange'
    },
    initialize: function() {
        
        this.render();

        //watch for searches
        app.on("search:start", this.onSearchStart, this);

        //handle search reset
        app.on("search:error", this.onSearchReset, this);  

        //handle search errors
        app.on("search:error", this.onSearchReset, this);        

    },
    render: function() {
        this.$el.html(_.template(this.template, this.model.toJSON()));
    },

    onAvailableSetsChange: function() {
        var setID = $('#availableSets').val();
        if (setID && setID !== "0") {
            app.trigger("setselection:user", setID);
        }
    },

    onSearchStart: function(id) {
        $('#availableSets').val(id); 
    },

    onSearchReset: function() {
      $('#availableSets').val("0");   
    }
});

$(document).ready(function() {

    var searchView = new app.SearchView({ el: '#setsSearch' });    
    var availableSetsView = new app.AvailableSetsView({ el: '#setsList', model: new app.AvailableSets });
    var setView = new app.SetView({ el: '#setContent' });

});
