const Writing = () => {
    const styles = {
        middleSection: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "black",
            borderRadius: "8px",
            height: "10cm",
            color: "white",
            justifyContent:"end",
           
        }
    }
    return (
        
        <div className="blackBG" style={styles.middleSection}>
                        <hr></hr>

            <section>
                <span className="tips">Tips</span>
                <h3 className="ways"> 5 ways to improve your digital project management</h3>
                <div className="second-half">
                    <img ></img>
                    <p>John Carter</p>
                    <p></p>
                    <p>January 2, 2023</p>
                </div>
            </section>
        </div>

    )
}
export default Writing