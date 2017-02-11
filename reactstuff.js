
var str = {"suraj":"hell"};
var hat = JSON.stringify(str);
$.post("./server.php",hat,

    function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);

    });
$.ajax({ url: 'http://localhost:63342/untitled/home.html?_ijt=7hr6k5jfpt20l3kb931o5a1hlm', success: function(data) { alert(data);
console.log(data);} });
var Itsform = React.createClass({
    getInitialState() {
        return {
            value1:"",
            value2:"",
            value3:""
        }

    },
    changer1: function (event) {
        this.setState({value1:event.target.value});

        console.log(this.state.value1);

    },
    changer2: function (event) {

        this.setState({value2:event.target.value});

        console.log(this.state.value2);

    },
    changer3: function (event) {

        this.setState({value3:event.target.value});
        console.log(this.state.value3);

    },
    render: function() {
        return(<div>
            <div className="container">
                <form id="contact" action="" method="post">
                    <h3>Enter Details</h3>
                    <h4></h4>
                    <fieldset>
                        <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Email Address" type="email" tabindex="2" required/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Roll no." type="url" tabindex="4" required/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Date" type="date" required/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="From" type="text" required/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Destination" type="text" required/>
                        <div className="dropscroll"></div>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Add Request</button>
                    </fieldset>

                </form>
            </div>


        </div>);
    }
});
ReactDOM.render(<Itsform/>, document.getElementById('suraj'));





