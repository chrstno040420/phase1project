// ////THIS IS US GETTING ALL OF THE DATA WE NEED TO START WORKOUT PROGRAM/////

fetch("https://exercisedb.p.rapidapi.com/exercises" , {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': key,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
})

	.then(response => response.json())
	.then(data => creatingTheStructure(data))

   
    
    function creatingTheStructure(movements){
        
        const firstDiv = document.querySelector("body")
        const bodyPartOfMuscle = document.createElement("img")
        firstDiv.append(bodyPartOfMuscle)

        const workoutEquipment = movements.filter((item, index )=> {
            if ( item.equipment === "barbell")
            return true
             })
/////working with just chest exersices right now/////
                const chestWorkout = workoutEquipment.filter((item, index ) =>{
                    if (item.bodyPart === "chest")
                    return true
                    })
                    console.log(chestWorkout)
                    const firstSixChestWorkouts = chestWorkout.slice(0,6);
                    const grabDiv = document.querySelector("#pectorial")
                    firstSixChestWorkouts.forEach(workout => {
                        const firstTag = document.createElement("h1")
                        firstTag.textContent =  workout.name
                        const firstImg = document.createElement("img")
                        firstImg.src = workout.gifUrl

            grabDiv.addEventListener("mouseover",function(){
                        
                        grabDiv.append(firstTag,firstImg);
                    })
                    
            })
            grabDiv.addEventListener("mouseleave",function(){
                 
                grabDiv.innerHTML = `CHEST <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYMXYAD-FR5E8TS14mcnSQ7iWsd_LbMLphw&usqp=CAU">` 


            })
           
///////// WORKING WITH BACK MOVMENTS/////////////////////                    
               const backWorkout = workoutEquipment.filter((item, index) =>{
                    if (item.bodyPart ==="back")
                    return true 
                    })
                    const firstSixBackWorkouts = backWorkout.slice(0,6);

                    const grabDiv2 = document.querySelector("#wide")
                    firstSixBackWorkouts.forEach(workout => {
                        const firstTag = document.createElement("h1")
                        firstTag.textContent =  workout.name
                        const firstImg = document.createElement("img")
                        firstImg.src = workout.gifUrl

            grabDiv2.addEventListener("mouseover",function(){
                        
                        grabDiv2.append(firstTag,firstImg);
                    })
                    
            })
            grabDiv2.addEventListener("mouseleave",function(){
                 
                grabDiv2.innerHTML = `BACK <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwoRhUWdy1ZncCQCK7WcEeLTiEhzeHtVuUw&usqp=CAU">` 


            })

////////////////////// ARM WORKOUT MOVEMENTS//////////////////////////////
                
                const armWorkout = workoutEquipment.filter((item, index)=>{
                    if (item.bodyPart === "upper arms")
                    return true
                    })
                    const firstSixArmWorkouts = armWorkout.slice(0,6);
                    
                    const grabDiv3 = document.querySelector("#boulder")
                    firstSixArmWorkouts.forEach(workout => {
                        const firstTag = document.createElement("h1")
                        firstTag.textContent =  workout.name
                        const firstImg = document.createElement("img")
                        firstImg.src = workout.gifUrl

            grabDiv3.addEventListener("mouseover",function(){
                        
                        grabDiv3.append(firstTag,firstImg);
                    })
                    
            })
            grabDiv3.addEventListener("mouseleave",function(){
                 
                grabDiv3.innerHTML = `ARMS <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4uvdZQGAJvyOLb8-4xqSstAEZUN1P8QRlG6MzvVwpfdRA0-GadFvm3WJD7Wz77gnuu7U&usqp=CAU">` 


            })





///////////////////////// LEG WORKOUT MOVEMENTS///////////////////////////////
        
                const legWorkout =  workoutEquipment.filter((item,index)=>{
                    if(item.bodyPart === "upper legs")
                    return true
                    })
                    const firstSixLegWorkouts = legWorkout.slice(0,6);

                    const grabDiv4 = document.querySelector("#trunk")
                    firstSixLegWorkouts.forEach(workout => {
                        const firstTag = document.createElement("h1")
                        firstTag.textContent =  workout.name
                        const firstImg = document.createElement("img")
                        firstImg.src = workout.gifUrl

            grabDiv4.addEventListener("mouseover",function(){
                        
                        grabDiv4.append(firstTag,firstImg);
                    })
                    
            })
            grabDiv4.addEventListener("mouseleave",function(){
                 
                grabDiv4.innerHTML = `LEGS <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQGsIgnhXPOt82R9fM1D6Nsy2ro7JKG6dlQ&usqp=CAU">` 


            })




////////////////////////SIX PACK ABS//////////////////////////////////////////

                const absWorkout = workoutEquipment.filter((item,index)=>{
                    if(item.bodyPart === "waist")
                    return true
                    })
                     const firstSixAbsWorkouts = absWorkout.slice(0,6);

                    
                     const grabDiv5 = document.querySelector("#pack")
                     firstSixAbsWorkouts.forEach(workout => {
                         const firstTag = document.createElement("h1")
                         firstTag.textContent =  workout.name
                         const firstImg = document.createElement("img")
                         firstImg.src = workout.gifUrl
 
             grabDiv5.addEventListener("mouseover",function(){
                         
                         grabDiv5.append(firstTag,firstImg);
                     })
                     
             })
             grabDiv5.addEventListener("mouseleave",function(){
                  
                 grabDiv5.innerHTML = `ABS <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVAi2g5g9OvTLNTfaWcqvF9F7gmDqIw8zMA&usqp=CAU">` 
 
 
             })
 




/////////////////////////// BOULDERS FOR SHOULDERS////////////////////////////////////
                const shoulderWorkout = workoutEquipment.filter((item,index)=>{
                    if(item.bodyPart === "shoulders")
                    return true
                     })
                    const firstSixShoulderWorkouts = shoulderWorkout.slice(0,6);

                    const grabDiv6 = document.querySelector("#bold")
                    firstSixShoulderWorkouts.forEach(workout => {
                        const firstTag = document.createElement("h1")
                        firstTag.textContent =  workout.name
                        const firstImg = document.createElement("img")
                        firstImg.src = workout.gifUrl

            grabDiv6.addEventListener("mouseover",function(){
                        
                        grabDiv6.append(firstTag,firstImg);
                    })
                    
            })
            grabDiv6.addEventListener("mouseleave",function(){
                 
                grabDiv6.innerHTML = `SHOULDERS <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswshig1nX0DDFcPa_QDA6y9f9YODUlk4FVA&usqp=CAU">` 


            })

       
       
       
       
        
        





        /////list of the days of the week ////////

        const mondayText = document.querySelector(".day1")
        const monday = document.createElement("h1")
        monday.textContent = "CHEST"
           mondayText.append(monday)
        let index = 0
        const colors = ["green", "red", "black"] 
        monday.addEventListener("click",function onClick(){
            
            monday.style.color = colors[index];

            index = index>= colors.length - 1 ? 0: index +1;

        })

        const tuesdayText = document.querySelector(".day2")
        const tuesday = document.createElement("h1")
        tuesday.textContent = "BACK"
           tuesdayText.append(tuesday)
        tuesday.addEventListener("click",function onClick(){
            
            tuesday.style.color = colors[index];

            index = index>= colors.length - 1 ? 0: index +1;

        })

        const wedText = document.querySelector(".day3")
        const wed = document.createElement("h1")
        wed.textContent = "LEGS"
           wedText.append(wed)
        wed.addEventListener("click",function onClick(){
            
            wed.style.color = colors[index];

            index = index>= colors.length - 1 ? 0: index +1;

        })

        const thursText = document.querySelector(".day4")
        const thurs = document.createElement("h1")
        thurs.textContent = "ARMS"
           thursText.append(thurs)
        thurs.addEventListener("click",function onClick(){
            
            thurs.style.color = colors[index];

            index = index>= colors.length - 1 ? 0: index +1;

        })
        const fridayText = document.querySelector(".day5")
        const friday = document.createElement("h1")
        friday.textContent = "SHOULDERS"
           fridayText.append(friday)
        friday.addEventListener("click",function onClick(){
            
            friday.style.color = colors[index];

            index = index>= colors.length - 1 ? 0: index +1;

        })
        
        const satText = document.querySelector(".day6")
        const sat = document.createElement("h1")
        sat.textContent = "ABS"
           satText.append(sat)
        sat.addEventListener("click",function onClick(){
            
            sat.style.color = colors[index];

            index = index>= colors.length - 1 ? 0: index +1;

        })
    
        const sunText = document.querySelector(".day7")
        const sun = document.createElement("h1")
        sun.textContent = "REST YOU EARNED IT!"
           sunText.append(sun)
        sun.addEventListener("click",function onClick(){
            
            sun.style.color = colors[index];

            index = index>= colors.length - 1 ? 0: index +1;

        })


    
        
                     
    
    
    }



