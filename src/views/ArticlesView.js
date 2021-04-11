import { Component } from 'react';

import SearchForm from '../components/SearchForm';
import newsApi from '../services/news-api';

class ArticlesView extends Component {
  state = {
    articles: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, page: 1, articles: [], error: null });
  };
  fetchArticles = () => {
    const { page, searchQuery } = this.state;
    this.setState({ isLoading: true });

    const options = {
      searchQuery,
      page,
    };

    newsApi
      .fetchArticles(options)
      .then(articles => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <>
        {error && <h1>Error ... Sorry</h1>}
        <h1>Статті</h1>
        <SearchForm onSubmit={this.onChangeQuery} />

        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
        {isLoading && <h2>Loading...</h2>}
        {this.state.articles.length > 0 && !isLoading && (
          <button onClick={this.fetchArticles}>Load More</button>
        )}
      </>
    );
  }
}

export default ArticlesView;
