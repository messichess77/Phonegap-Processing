           doTheMath() {
           
           begintime = new Date().getTime()/1000

            for(i = 0; i<1; ++i)
                {
                a = Math.random() * 11
                b = Math.random() * 11
                x = Math.floor(a) 
                y = Math.floor(b)

                z = x * y;
                }   

            endtime = new Date().getTime()/1000

speedtime = endtime - begintime

document.write(speedtime)
           }
            
