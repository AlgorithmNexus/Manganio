export const mines=[
{id:'BH-01',name:'Bharveli',district:'Balaghat, Madhya Pradesh',status:'Operational',prospectivity:87.4,resource:12.6,reserve:8.9,grade:31.8,confidence:82,area:18.4,depth:145,production:28600},
{id:'UK-02',name:'Ukwa',district:'Balaghat, Madhya Pradesh',status:'Operational',prospectivity:81.2,resource:9.8,reserve:6.4,grade:28.6,confidence:77,area:13.2,depth:128,production:22100},
{id:'DB-03',name:'Dongri Buzurg',district:'Bhandara, Maharashtra',status:'Operational',prospectivity:74.8,resource:7.2,reserve:4.7,grade:26.9,confidence:74,area:11.6,depth:118,production:17400},
{id:'GM-04',name:'Gumgaon',district:'Nagpur, Maharashtra',status:'Exploration',prospectivity:68.5,resource:5.4,reserve:3.1,grade:24.8,confidence:69,area:9.1,depth:102,production:9800}
];
export const production={labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],actual:[24800,26100,27200,25800,28100,27600,28900,29400,30100,null,null,null],forecast:[null,null,null,null,null,null,null,null,30100,30900,31600,32400],quota:[27000,27000,27500,27500,28000,28000,28500,29000,29500,30000,30500,31000]};
export const alerts=[
{id:1,severity:'High',title:'Rainfall impact risk',mine:'Bharveli',text:'7-day rainfall forecast may reduce haul-road availability by 12–18%.',time:'18 min ago'},
{id:2,severity:'Medium',title:'Equipment availability',mine:'Ukwa',text:'Truck fleet availability has dropped below the 85% operating threshold.',time:'42 min ago'},
{id:3,severity:'Medium',title:'Prospectivity anomaly',mine:'Gumgaon',text:'New satellite spectral anomaly detected in the eastern exploration block.',time:'1 hr ago'},
{id:4,severity:'Low',title:'Model refresh available',mine:'All mines',text:'Updated geological feature layer is ready for validation.',time:'3 hrs ago'}
];
export const recommendations=[
{title:'Prioritize Bharveli Block C',confidence:91,text:'High prospectivity + favourable Mn/Fe signature + short fault distance make this the strongest demo target for next-stage drilling.',tag:'EXPLORATION'},
{title:'Adjust July production plan',confidence:84,text:'Rainfall sensitivity and current fleet availability suggest shifting 6% of planned output into the following operating window.',tag:'OPERATIONS'},
{title:'Validate Gumgaon anomaly',confidence:76,text:'Run field validation against the newly detected spectral cluster before assigning additional exploration budget.',tag:'GEOLOGY'}
];
export const prospectivity=[
{name:'Sausar Belt',region:'Madhya Pradesh',score:91,x:52,y:47,type:'Very High'},
{name:'Bharveli Block C',region:'Balaghat',score:94,x:55,y:51,type:'Very High'},
{name:'Ukwa Corridor',region:'Balaghat',score:86,x:57,y:55,type:'High'},
{name:'Dongri Buzurg',region:'Bhandara',score:78,x:61,y:59,type:'High'},
{name:'Gumgaon East',region:'Nagpur',score:69,x:66,y:63,type:'Moderate'},
{name:'Bonai-Keonjhar',region:'Odisha',score:83,x:77,y:40,type:'High'},
{name:'Sandur-Dharwar',region:'Karnataka',score:72,x:45,y:76,type:'Moderate'},
{name:'Aravalli Zone',region:'Rajasthan',score:58,x:27,y:30,type:'Moderate'}
];
