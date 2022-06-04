import {Group, Input, Loader} from "@mantine/core"
import { useEffect, useState } from "react"
import { Cards } from "./Card"
const List = () => {
    const [list, setList] = useState([])
    const [call, setCall] = useState('')
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('India')
    const url = 'https://restcountries.com/v3.1/name/'
    useEffect(() => {
        fetch(`${url}${input}`)
            .then(res => res.json())
            .then(ans => {setList(ans)
            
            setLoading(false)})
            .catch(err => {
                console.log(err)
            })
        
        
    }, [input])
    let count = {}
    let arr = []
    function debounce(callback){
        let timer
        return (...args) => {
            if(timer){
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                callback(args)
            }, 1000)
        }
    }
    let callme = debounce(handleInput)
    function handleInput(e){
        setLoading(true)
        console.log('Called')
        setInput(e.target.value)
        setList([])
       
    }
    

    {
        list.length > 0 && list.forEach(ele => {

            let curr = {}
            let lang = {}
            for (let key in ele.currencies) {
                curr = ele.currencies[key]
            }
            for (let key in ele.languages) {
                lang.one = ele.languages[key]
                break;
            }

            count = {
                name: ele.name.common,
                area: ele.area,
                population: ele.population,
                flag: ele.flags.png,
                region: ele.region,
                languages: lang,
                currencies: curr
            }
            arr.push(count)


        })
    }
    return  (
        <div>
            <div>
                <Input value={input} onChange={callme} className="inp"
                size="lg"/>
            </div>
            
            <Group position="center">
            {loading && <Loader/>}
            </Group>

            {arr.length === 0 && 
            <Group position="center">
                <h1>Are You In Wonderland</h1>
            </Group>}
        <div className="simba">
            
           
          
            {arr.length > 0 && arr.map((ele, index) => (
                <Cards key={index}
                name={ele.name}
                region={ele.region}
                flag={ele.flag}
                population={ele.population}
                area={ele.area}
                language={ele.languages.one}
                sym={ele.currencies.symbol}
                cname={ele.currencies.name}
                />
            ))}
           

        </div>

        </div>
        
    )
}
export { List }