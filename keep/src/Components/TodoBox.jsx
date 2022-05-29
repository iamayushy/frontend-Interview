import {ActionIcon} from '@mantine/core'
import {IoIosAddCircleOutline} from 'react-icons/io'
const TodoBox = ({Title}) => {
    return(
            <div className='todo'>
            <section>
                <h3>{Title}</h3>
            </section>
            <section>
                <ActionIcon variant='filled' radius='lg' size={30} color='blue'>
                    <IoIosAddCircleOutline size={20} color=''/>
                </ActionIcon>
            </section>
            </div>
            
    )
}
export {TodoBox}