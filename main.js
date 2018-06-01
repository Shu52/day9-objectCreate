// const ChickFilA = Object.create({}, {
//     business: {
//         value: "Chick-Fil-A"
//     },
//     employmentStart: {
//         value: "01-01-2009"
//     },
//     employmentEnd: {
//         value: "01-01-2010"
//     }
// })
// Job 1
const SouthernHills = Object.create(null,{
    business:{
        enumerable: true,
        writable: false,
        value: "Southern Hills"
    },
    employmentStart:{
        enumerable: true,
        writable: false,
        value: "02/2012"
    },
    employmentEnd:{
        enumerable: true,
        writable: false,
        value:"02/2018"
    },
    role:{
        enumerable: true,
        writable: false,
        value:"MRI Technologist"
    },
    pros:{
        enumerable: true,
        writable: false,
        value:"Money"
    },
    cons:{
        enumerable: true,
        writable: false,
        value:"Hours"
    }

})
// Job 2
const Sentara = Object.create(null,{
    business:{
        enumerable: true,
        writable: false,
        value: "Sentara"
    },
    employmentStart:{
        enumerable: true,
        writable: false,
        value: "02/2013"
    },
    employmentEnd:{
        enumerable: true,
        writable: false,
        value:"11/2013"
    },
    role:{
        enumerable: true,
        writable: false,
        value:"MRI Technologist"
    },
    pros:{
        enumerable: true,
        writable: false,
        value:"Support"
    },
    cons:{
        enumerable: true,
        writable: false,
        value:"Traffic"
    }

})
//Job 3
const MDI = Object.create(null,{
    business:{
        enumerable: true,
        writable: false,
        value: "MDI"
    },
    employmentStart:{
        enumerable: true,
        writable: false,
        value: "02/2011"
    },
    employmentEnd:{
        enumerable: true,
        writable: false,
        value:"08/2012"
    },
    role:{
        enumerable: true,
        writable: false,
        value:"MRI Technologist"
    },
    pros:{
        enumerable: true,
        writable: false,
        value:"Outpt"
    },
    cons:{
        enumerable: true,
        writable: false,
        value:"Busy"
    }

})
//job 4
const rapid = Object.create(null,{
    business:{
        enumerable: true,
        writable: false,
        value: "Rapid Care Walk in Clinic"
    },
    employmentStart:{
        enumerable: true,
        writable: false,
        value: "08/2008"
    },
    employmentEnd:{
        enumerable: true,
        writable: false,
        value:"12/2008"
    },
    role:{
        enumerable: true,
        writable: false,
        value:"Medical Assistant"
    },
    pros:{
        enumerable: true,
        writable: false,
        value:"Small"
    },
    cons:{
        enumerable: true,
        writable: false,
        value:"Busy"
    }

})
//job5
const Cookeville = Object.create(null,{
    business:{
        enumerable: true,
        writable: false,
        value: "Cookeville Regional"
    },
    employmentStart:{
        enumerable: true,
        writable: false,
        value: "06/2007"
    },
    employmentEnd:{
        enumerable: true,
        writable: false,
        value:"02/2008"
    },
    role:{
        enumerable: true,
        writable: false,
        value:"MRI Technologist"
    },
    pros:{
        enumerable: true,
        writable: false,
        value:"Money"
    },
    cons:{
        enumerable: true,
        writable: false,
        value:"Corporate"
    }

})


//Challenge
// const multiplyES6 = (x, y) => { return x * y };
const JobMaker = (object,businessValue,employmentStartValue,employmentEndValue,roleValue,prosValue,consValue) => {
    const theObjectYouBuilt = Object.create(null,{},);
    theObjectYouBuilt.business = businessValue;
    theObjectYouBuilt.employmentStart = employmentStartValue;
    theObjectYouBuilt.employmentEnd = employmentEndValue;
    theObjectYouBuilt.role = roleValue;
    theObjectYouBuilt.pros = prosValue;
    theObjectYouBuilt.cons = consValue;
    return theObjectYouBuilt
}
let student =(JobMaker("NSS","NSS","5/18","current","student","learning","no money"));
console.log(student, student.business, student.employmentStart)
//Advanced Challenge
const jobArray =[SouthernHills,Sentara,MDI,rapid,Cookeville,student];
// Iterate over the array, and use document.createElement() to build an <article> element representing each job.

const jArticle = document.createElement("article")
const divRef = document.querySelector("#content-holder")
for(let i =0;i<=jobArray.length;i++){
   jArticle.id = jobArray[i.business];   
//    divRef.appendChild(jArticle)

}
// for(let ps in jobArray){
//     let jobArt = document.createElement("article")
//     let textNode = document.createTextNode("`${ps}: ${jobArt[ps]}`");
//     jobArt.appendChild(textNode);
//   }
// The id property of the element should be the name of the business.
