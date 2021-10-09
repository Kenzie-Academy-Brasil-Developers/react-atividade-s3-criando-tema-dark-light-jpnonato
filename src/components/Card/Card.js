import { CardMain, MainDiv, Button, Section } from './styles'
import { UseList } from '../../providers/ListProvider'




const Card = () => {

    const {list, theme, setTheme} = UseList()


    const chnageTheme = () => theme === 'ligth' ? 
    setTheme('dark') : setTheme('ligth') 
    
    return(
        <>
        <MainDiv theme={theme}>
            <Section>
                <Button onClick={chnageTheme} theme={theme}>Dark mode</Button>
            </Section>
            <Section>
            {
                list.map((person) => (
                    <CardMain theme={theme}>
                        <h2>{person.name}</h2>
                        <h2>{person.age}</h2>
                        <h2>{person.country}</h2>
                    </CardMain>
                ) )
            }
            </Section>
        </MainDiv>
        </>
    )
   
}

export default Card