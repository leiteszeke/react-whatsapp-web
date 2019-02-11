import React, { Component } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

const API_URL = 'http://localhost:8003/';
const accessToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.MQ.EAsT0TSknH90KJFcp9iRFFPZfIQmILPnY10Z1OmMGEM';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [],
            chat: {},
        };

        this.selectChat = this.selectChat.bind(this);
    }

    componentDidMount() {
        axios.get(`${ API_URL }chats`, {
            headers: {
                Authorization: accessToken,
            }
        })
            .then(res => {
                this.setState({ chats: res.data.data })
            })
            .catch(err => console.log(err));
    }

    selectChat(chatId) {
        axios.get(`${ API_URL }chats/${ chatId }`, {
            headers: {
                Authorization: accessToken,
            }
        })
            .then(res => {
                this.setState({ chat: res.data.data })
            })
            .catch(err => console.log(err));
    }

    render() {
        const {
            chat,
            chats,
        } = this.state;

        return (
            <Layout
                chat={ chat }
                chats={ chats }
                onChatSelect={ this.selectChat }
            />
        )
    }
}

export default Home;