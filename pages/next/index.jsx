import  styles  from '../../styles/Next.module.css'
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Next = ({ninjas}) => {
    return (
        <div>
            <h1>Nextjs</h1>
            {ninjas.map(ninja => (
                <div key={ninja.id}>
                    <a className={styles.single}> <h3>{ninja.name}</h3> </a>
                    </div>
            ))}
        </div>

      );
}
 
export default Next;


        
