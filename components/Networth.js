import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class OpeningPageQs extends React.Component {
  
    
    state = {
    name: '',
    networth: 0,
    growRt: 0,
    year: 0
    // newNetworth: 0
}

// incrementYear = () => {
//     this.setState(prevState => ({year: prevState.year + 1}))
// }

nextYearWorth() { 
    

    this.setState({
        // name: this.state.name,
        name: this.state.name,
        networth: this.state.networth,
        growRt: this.state.growRt,
        year: this.state.year
        
        
    });
return (alert(this.state.name + ' will be worth ' + this.state.networth*(Math.pow((1 + ((this.state.growRt)/100)), this.state.year)) + ' in ' + this.state.year + ' years!'));


}


    render (){
        

        return (
        <View>
            <TextInput style= { styles.input }
                placeholder= "name"
                onChangeText={text => this.setState({name: text})}
            />

            <TextInput style= { styles.input }
                placeholder= 'networth'
                onChangeText={value => this.setState({networth: value})}
            />
            <TextInput style = { styles.input }
                placeholder= 'Growth Rt'
                onChangeText={value => this.setState({growRt: value})}
                />

            <TextInput style= { styles.input }
            placeholder= '# of Years'  
            onChangeText={value => this.setState({year: value})} 
            /> 

            <TouchableOpacity style = {styles.submitButton}
            onPress = {
                () =>  this.nextYearWorth()
                //think i can remove what is inside the parentheses and just have func run 
                //because the functionality is in the return statement
                //also, if want to do year over year in the future, might have to change to useState
            }
            >
             
                <Text style={styles.submitButtonText}>
                Submit
                </Text>
                </TouchableOpacity> 
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
        
    },

    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText: {
         color: 'white'
     }
})


export default OpeningPageQs;