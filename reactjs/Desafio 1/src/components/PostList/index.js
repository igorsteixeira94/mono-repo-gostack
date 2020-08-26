import React, { Component } from 'react';
import PostItem from "../PostItem";

import './styles.css';

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Igor Rodrigues",
          avatar: "https://avatars1.githubusercontent.com/u/47749249?s=460&u=9c6deccd060caa4aa48381692fda430ab15af8de&v=4",
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando ?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          },

        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSya5dwz7sppH6NGJVip5KpNHbO6feSmMVJoQ&usqp=CAU",
        },
        date: "24 Jun 2002",
        content: ["Fala galera, beleza?",<br/>,<br/>,"Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia."],
        comments: [
          {
            id: 1,
            author: {
              name: "Carla Rodrigues",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWjufp-__JFr3D2w8oa2SRj1DwtkKPWWVOsA&usqp=CAU"
            },
            content: " Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "João Saulo",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJby-DVzOsxH9n7XuLtPpaG_idB8mSdd957Q&usqp=CAU"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          },

        ]
      }
    ]
  };

  render(){
    return (
      <main>
          {this.state.posts.map(post => <PostItem key={post.id} data={post}/>)}
      </main>

    )
  }
}

export default PostList;
