$('document').ready(()=>{
    let press = ''
    $('.clickable').click((event)=>{
        press+=event.currentTarget.id
        $('#screen').text(press)
    })
    $('#ac').click(()=>{
        $('#screen').text('')
        press = ''
    })

    $('#equals').click(()=>{
        for(let i = 0; i<press.length; i++){
            switch(press[i]){
                case '*':
                    let pow = press.split('*')
                    $('#screen').text(Number(pow[0])*Number(pow[1]))
                    press = Number(pow[0])*Number(pow[1])
                    break;
                case '/':
                    let del = press.split('/')
                    $('#screen').text(Number(del[0])/Number(del[1])) 
                    press = Number(del[0])/Number(del[1])
                    break;
                case '+':
                    let pl = press.split('+')
                    $('#screen').text(Number(pl[0])+Number(pl[1])) 
                    press =Number(pl[0])+Number(pl[1])
                    break   
                case '-':
                    let min = press.split('-')
                    $('#screen').text(Number(min[0])-Number(min[1]))  
                    press =Number(min[0])-Number(min[1])
                    break    
            }
        }
    })
})