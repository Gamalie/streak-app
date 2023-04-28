interface Streak{
    id:number,
    date:string,
   image: string,
    activit:string
}

class Streak{
    
    async addActivity(id:number){
        const display = await fetch("http://localhost:3000/activities")
        const activities = await display.json() as Streak []
        let html =''
        for(let behavior of activities){
                html+= ` <div class="activity">
                <p><ion-icon name="logo-no-smoking"></ion-icon></p>
                <p id=" days">${behavior.date}</p>
                <p id = "activity">${behavior.activit}</p>
            </div>`
            }
            

            const streakApp = document.querySelector(".activity") as HTMLDivElement
            streakApp.innerHTML=html
        }


}
Streak.addActivity()
