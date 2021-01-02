import React, { Component } from 'react';
 
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
 
import { Navbar} from './Layout/Layout';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Form from './Form';
import EditPost from './EditPost';
import Footer from "./Layout/Footer";
 
class Router extends Component {
    state = {  
        posts: []
    }
 
    componentDidMount() {
        this.getPost();
    }
 
    getPost = () => {
        axios.get(`http://localhost:5000/Posts`)
             .then( res => {
                 this.setState({
                     posts: res.data
                 }) 
             })
    }
 
    deletePost = (id) => {
        //console.log(id);
        axios.delete(`http://localhost:5000/Posts/${id}`)
        .then(res => {
            if (res.status === 200) {
                const posts = [...this.state.posts];
                let result = posts.filter(post => (
                    post.id !== id
                ));
                this.setState({
                    posts: result
                })
            } 
        })
    }
 
    createPost = (post) => {
        axios.post(`https://jsonplaceholder.typicode.com/Posts`, {post})
             .then(res => {
                 if (res.status === 201) {
                    Swal.fire(
                        'Post Create',
                        'It is created correctly.',
                        'success'
                    )
 
                    let postId = {id: res.data.id};
                    const newPost = Object.assign({}, res.data.post, postId)
 
                    this.setState(prevState => ({
                        posts: [...prevState.posts, newPost]
                    }))
                 }
             })
    }
 
    // editPost = (postUpdate) => {
    //     const {id} = postUpdate;
 
    //     axios.put(`http://localhost:5000/Posts/${id}`, {postUpdate})
    //          .then(res => {
    //              if (res.status === 200) {
    //                 Swal.fire(
    //                     'Post Updated',
    //                     'The changes were saved correctly.',
    //                     'success'
    //                 )
 
    //                 let postId = res.data.id;
 
	// 				       const posts = [...this.state.posts];
 
    //                 const postEdit = posts.findIndex(post => postId === post.id)
 
    //                 posts[postEdit] = postUpdate;
    //                 this.setState({
    //                     posts 
    //                 })
    //              }
    //          })
    // }
 
    render() { 
        return (  
            <BrowserRouter>
 
                <div>
                
                    <div>
 
                        <Navbar />
 
                        <Switch>
                            <Route exact path="/" render={ () => {
                                return(
                                    <Posts 
                                        posts={this.state.posts}
                                        deletePost={this.deletePost}
                                    />
                                );
                            }} />
 
                            <Route exact path="/Post/:postId" render={ (props) => {
                                let idPost = props.location.pathname.replace('/post/', '')
 
                                const posts=this.state.posts;
                                let filter;
                                filter = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))
 
 
                                return(
                                    <SinglePost 
                                        post={filter[0]} 
                                    />
                                )
                            }} />
                            <Route exact path="/create" render={() => {
                                return(
                                    <Form 
                                        createPost={this.createPost}
                                    />
                                );
                            }}
                            />
                             {/* <Route exact path="/edit/:postId" render={ (props) => {
                                let idPost = props.location.pathname.replace('/edit/', '')
                                const posts=this.state.posts;
                                let filter;
                                filter = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))                                
                                return(
                                    <EditPost
                                        post={filter[0]} 
                                        editPost={this.editPost}
                                    /> }
                                )
                            }} />                         */}
                        </Switch>
                    </div>
                    <Footer />
                </div>            
            </BrowserRouter>
        );
    }
} 
export default Router;