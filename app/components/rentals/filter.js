import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      rentals = rentals.filter(rental => rental.title.includes(query));
    /*
      TODO: it would also be case-insensitive,
      and also allow you to search by city,
       category, type, or description
    */
    }

    return rentals;
  }
}
