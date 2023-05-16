const Header=() => {
    const styles= {
        header: {
            display:"flex",
            backgroundColor:"lightgrey",
            justifyContent: "space-around"
        }
    }
 return (
    
        <h2 style={styles.header}>  
            <section>✏️ Writeology X </section>
            <button>Cart</button>   
        </h2>
 )
}

export default Header