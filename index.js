// console.log('hay')
// var name = "Muhammad Bilal"
// alert('My name is '+name +' and I am here for you :)');
// let x = 15000;
// alert('My name is '+name +' and I am here for you and My tution fee is '+ x/10);

// alert(1000+x);
// let x = 1
// let y = --x
// alert(x)
// alert(y)


// let No = prompt('Select City','Karachi');
// if (No === 'Karachi')
// {
// alert('You are absolutely right that City was '+ No);
// }
// else
// {
//     alert('           Sorry Try Again!')
// }

//let l = []
// for(let x=2000,y = 0;x<=3000;x++,y++)
// {
//     if (x % 5 !== 0 && x % 7 === 0) 
//     {
//         l[y] = x;
//     }
// }
// alert(l)
// var l = ['1',2,'city',3.2];


// let l = ['snake','zebra','loin','cheeta','bear','tiger'];
// let x =l.splice(0,2,'queen','alobara','jazzo')
// alert(x)
// l.unshift('Loin','King')
// alert(l)

// let l = ['Blue_Ray','Up_chunk',"lojack","Gizmo","Do_Reg"];
// let m = ["Zzz","Brup","Dogbone","Droop"];
// let l1 = l.length;
// let m1 = m.length;;
// fn = [];
// z=0;
// for(let x = 0;x < l1; x++)
// {
//     for(let y = 0;y < m1; y++,z++)
//     {
//         fn[z] = l[x]+"    "+m[y];
//     };
// };
// alert(fn);
  

// let name = prompt('Enter Your Name :-','Name')
// alert('Your name is '+name.tolowerCase());


// let month = prompt('Enter the Month : ');
// let CIM = month.length;
// if(CIM > 3)
// {
// ma = month.slice(0,3);
// }
// alert(ma)

// let para = 'The code loops through the string looking for "World War II." Line 2 progresses through the string character-by-character, examining each 12-character sequence. If it finds "World War II," line 3 concatenates three segments: all the characters preceding "World War II," the substitute phrase "the Second World War," and then all the characters following "World War II."';
// let l = para.length;
// for(let x = 0;x<l;x++)
// {
    // if('World War II' === para.slice(x,x+12) )
    // {
    //     para=para.slice(0,x)+'World War I'+para.slice(x+12)
    // }
//     if('World War II' === para.slice(x,x+12) )
//     {
//         let para1 = para.replace('World War II','third for I');
//     para.replace(/World War II/g,'Bird Bar II');
//     }
 

// }
// // alert(para1)
// alert(para)
// let newpara=para.replace(/World War II/g,'third for I');
// alert(newpara)

// ans = Math.random();
// alert(Math.round(ans*12))

// let num = 11.28931;
// let num1 = num.toFixed(2)
// alert(num1)

// let today = new Date()
// asx = today.getTime()
// alert(asx/(60*60*24*1000*365))
function checkAddress(fieldId) 
{let val = document.getElementById(fieldId).value;
    
    if(val.slice(-10,) !== '@gmail.com' && val.slice(-9,) !== '@gmail.co' && val.slice(-10,-3) !== '@gmail.') 
    {
     alert("Invalid Input");
     
    }
    
}

// val = "hay@gmail.com"
// alert(val.slice(-10,))
Zip_list = {
    "Abbotabad"			:  	22010,			
    "Lahore"			:	    54000,
    "Attock"			:		43600	,			
    "Lahore Gulberg"	:			54660,
    "Badin"				:	72220	,			
    "Lahore Cantt"		:		54810,
    "Bagh"				:	12500	,			
    "Lahore Model Town"	:		54700,
    "Bahawalnagar"		:		62300		  ,      
    "Lahore Ferozepure road"	:		54600,
    "Bahawalpur"			:	63100,			
    "Lahore Awan Colony"	:		54780,
    "Bannu"				:	28100	,			
    "Lahore Iqbal Town"		:	54570,
    "Balakot"				:	21230,				
    "Lahore Chah Miran"		:	54900,
    "Bhakkar"				:	30000,				
    "Lahore Walton"			:	54750,
    "Chaklala Cantt"		:		46200,		
    "Lahore Ismail Nagar"	:		54760,
    "Chakwal"				:	48800	,			
    "Lahore Baghban- Pura"	:		54920,
    "Charsadda"		:		24420	,		
    "Lahore Town Ship"	:		54770,
    "Chitral"		:			17200	,			
    "Lahore Shahdara- Bagh"	:		54950,
    "Dera Ghazi Khan"	:			32200,			
    "Lahore Mughal Pura":			54840,
    "Dera Ismail Khan"	:		29050	,	
    "Lahore Multan road":			54500,
    "Dir"				:	18000			,	
    "Punjab University New Campus"	:	54590,
    "Faisalabad"		:		38000,			
    "Larkana"			:		77150,
    "Fateh Jang"		:		43350,			
    "Layyah"			:		31200,
    "Gilgit"			:		15100	,			
    "Mandi Bahauddin"	:			50400,
    "Gujar Khan"		:		47850,			
    "Mansehra"			:	21300,
    "Gujranwala"		:		52250,			
    "Mardan"			:		23200,
    "Gujrat"			:		50700,				
    "Mianwali"			:	42200,
    "Gwadar"			:		91200,				
    "Mirpur"			:		10250,
    "Haripur"			:		22620,				
    "Mirpur Khas"		:		69000,
    "Hasan Abdal"		:		43730,			
    "Multan"			:		60000,
    "Hyderabad"			:	71000	,		
    "Murree"			:		47150,
    "Islamabad"			:	44000	,		
    "Muzaffarabad"		:		13100,
    "Jacobabad"			:	79000	,		
    "Narowal"			:		51800,
    "Jhang"				:	35200,				
    "Nawabshah"			:	67450,
    "Jang Shahi"		:		73110,			
    "Nowshera"			:	24100,
    "Jhelum"			:		49600,				
    "Okara"				:	56300,
    "Kalat"				:	88300	,						
    "Karachi Al-Haidry"	:		74700,		
    "Peshawar"			:	25000,
    "Karachi Defence"	:			75500,			
    "Qila Sheikhupura"	:		39350,
    "Karachi"			:		74200,				
    "Quetta"			:		87300,
    "Karachi F.B. Area"	:		75950,		
    "Rahimyar Khan"		:		64200,
    "Karachi City"		:		74000,			
    "Rawalkot"			:	12350,
    "Karachi Gulshan-e-Iqbal"	:		75300,		
    "Rawalpindi"		:		46000,
    "Karachi Korangi"	:			74900,			
    "Risalpur"			:	24080,
    "Karachi New Town"	:		74800,		
    "Sahiwal"			:		57000,
    "Karachi PECHS (Block: # 6)"	:	75400,	
    "Saidu Sharif"		:		19200,
    "Karachi Nazimabad"	:		74600,		
    "Sanghar"			:		68100,
    "Karachi Saddar"	:			74400,			
    "Sargodha"			:	40100,
    "Karachi Cantt"		:		75530,			
    "Sialkot"			:		51310,
    "Karachi Clifton"	:			75600,			
    "Sibi"				:	82000,
    "Karak"				:	27200	,			
    "Sujawal"			:		37050,
    "Kasur"				:	55050	,			
    "Sawabi"			:		23430,
    "Khanewal"			:	58150	,		
    "Sukkur"			:		65200,
    "Kanpur"			:		22650,				
    "Talagang"			:	48100	,
    "Taxila"			:		47080,
    "Khushab"			:		41000	,			
    "Toba Tek Singh"	:			36000,
    "Khuzdar"			:		89100,				
    "Turbat"			:		92600,
    "Kohat"				:	26000				,
    "Vehari"			:		61100,	
    "Wah"				:	47000,
    "Kamo Ke"			:		52470,				
    "Wah Cantt"			:	47040,
    "Kallar Kahar"		:		48530,			
    "Wazir Abad"		:		52000}
   function zip1() 
   {let zip = document.getElementById('zip').value;
           for(let key in Zip_list)
       {
if(zip ==  Zip_list[key]){
    document.getElementById("city").value = key;
   }
          }    }
// for(let key in Zip_list)
//         {alert(Zip_list[key])}
function expand()
{
    let para = 'I am Muhammad Bilal and I am 20 years old.I am in Punjab University Jhelum.'
    document.getElementById('compressed').innerHTML = para;
}
function listit()
{
    let list1 = "<ol><li>Muhammad</li><br><li>Bilal</li><br><li>khan</li></ol>" ;
    document.getElementById("list").innerHTML = list1;
}
function hideit()
{
    document.getElementById('ugly').className = 'hidden';
}