import React, { Component, PropTypes } from 'react';
import RecentFoodActivityView from './RecentFoodActivityView';
const icon = {
  food: 'https://www.healthbytez.com/wp-content/uploads/2016/02/192666.jpg'
};

class RecentFoodActivity extends Component {
  constructor(props) {
    super(props);
    this.foodData = [1, 2, 3];
  }

  componentWillReceiveProps(nextProps) {
    this.foodData = nextProps.activities.activities.data[2];

    console.log('INSIDE FOOOOOOOOOD', nextProps);
  }

  render() {
    return (
      <div>
        <div className="profile-activity-header">
          <div className="profile-text-header-container">
            <img src={icon.food} className="activity-icon img-circle" alt="test" />
            <p className="profile-text-header">Recent Food</p>
          </div>
        </div>
        <div className="profile-activity-body">
          <div className="profile-text-body-container">
            <ul>
              <p className="profile-text-body">{this.foodData.slice(-3).map((f, index) => 
                <RecentFoodActivityView carbs={f.carbs} fats={f.fats} protein={f.protein} key={index} date={f.date_performed} />
              )}
              </p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentFoodActivity;
