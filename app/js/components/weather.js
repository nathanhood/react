/** @jsx React.DOM */

var Weather = React.createClass({
  getInitialState: function(){
    return {temp: 0};
  },
  getWeather: function(){
    var url = "http://api.wunderground.com/api/a32c1c536b032b2d/conditions/q/"+this.props.zip+".json?callback=?";
    $.getJSON(url, function(data){
      this.setState({temp: data.current_observation.temp_f});
    }.bind(this));
  },
  render: function(){
    return (
      <div className='weather'>
        <Title name={this.props.zip} />
        <button onClick={this.getWeather}>Get Weather</button>
        <div><span>{this.state.temp}</span> <span>degrees</span></div>
      </div>
    );
  }
});
