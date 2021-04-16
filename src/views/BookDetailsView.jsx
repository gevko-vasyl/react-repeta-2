import { Component } from 'react';
import axios from 'axios';

class BookDetailsView extends Component {
  state = { descr: null, genre: null, id: null, imgUrl: null, title: null };

  async componentDidMount() {
    const { bookId } = this.props.match.params;

    const response = await axios.get(`http://localhost:4040/books/${bookId}`);
    this.setState({ ...response.data });
  }

  render() {
    return (
      <>
        <h1>Book {this.props.match.params.bookId} page</h1>
        <img src={this.state.imgUrl} alt="" />
        <h2>{this.state.title}</h2>
        <p>{this.state.genre}</p>
        <p>{this.state.descr}</p>
      </>
    );
  }
}

export default BookDetailsView;
