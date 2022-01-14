$('document').ready(()=>{
    $('.disabled').addClass('disabledClass')
    let current = new Date()
    let hour = current.getHours()
    let minute = current.getMinutes()
    $('#hour').text(hour+':'+minute)
    let press = ''
    $('.clickable').click((event)=>{
        $('.disabled').removeClass('disabledClass')
        press+=event.currentTarget.id
        $('#screen').text(press)
    })
    $('#ac').click(()=>{
        $('.disabled').addClass('disabledClass')
        $('#screen').text('0')
        press = ''
        plMn=false
    })

    $('#equals').click(()=>{
        for(let i = 0; i<press.length; i++){
            switch(press[i]){
                case '*':
                    let pow = press.split('*')
                   let powNum = Number(pow[0])*Number(pow[1])
                    if(String(powNum).includes('.')){
                        let spl =  String(powNum).split('.')
                        let splRight = spl[1].slice(0,1)
                         $('#screen').text(Number(spl[0])+'.'+Number(splRight)) 
                         press = Number(spl[0])+'.'+Number(splRight)
                     }else{
                        $('#screen').text(Number(pow[0])*Number(pow[1]))
                        press = Number(pow[0])*Number(pow[1])
                     }

                    break;
                case '/':
                    let del = press.split('/')
                    let delay = Number(del[0])/Number(del[1])
                    if(String(delay).includes('.')){
                        let spl =  String(delay).split('.')
                        let splRight = spl[1].slice(0,1)
                         $('#screen').text(Number(spl[0])+'.'+Number(splRight)) 
                         press = Number(spl[0])+'.'+Number(splRight)
                     }else{
                        $('#screen').text(delay) 
                        press = Number(del[0])/Number(del[1])
                     }

                    
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
                case '%':
                    let percent = press.split('%')
                    let per = Number(percent[0])*Number(percent[1])/100
                    $('#screen').text(Math.floor(per))  
                    press =per
                    break 
                default:
                    console.log('hi')              
            }
        }
    })
    let plMn=false
    $('#pl-mn').click(()=>{
        if(!plMn){
            $('#screen').text(press+='-')
            plMn=true;
            return
        }
        if(plMn){
            press=''
            $('#screen').text(press+='+')
            plMn=false;
            return
        }
       
    })
})