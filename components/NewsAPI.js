import React, { Component } from 'react';
import { Alert, Container, Header, Content, List, ListItem, Thumbnail, View, ActivityIndicator, Text } from 'react-native';

import { DataItem } from './dataItem';
import { getArticles } from '../src/config/service/news';

//"Likely forgot to export your component from the file it's defined in, or you might have mixed up default and named exports"
//may need to fix "export default class" and change to new format

export default class ListThumbnailExample extends Component {
constructor(props){
super(props);

this.state = {
    isLoading: true,
    data: null
}
}

componentDidMount(){
    getArticles().then(data => {
        this.setState({
            isLoading: false,
            data: data
        });
    }, error => {
        Alert.alert('Error', 'Something went wrong!');

    }
    )
}

    render() {
        console.log(this.state.data);

        let view = this.state.isLoading ? (
            <View>
                <ActivityIndicator animating={this.state.isLoading} />
                <Text style={{marginTop: 10}}>Please Wait...</Text>
            </View>
        ) : (
            <List 
                        dataArray={this.state.data}
                        renderRow={(item) => {
                            return <DataItem data={item} />
                        }}
                    />
        )

        return (
            <Container>
                <Content>
                    {view}
                        
                 
                </Content>
            </Container>
        );
    }
}

// export default NewsAPI;