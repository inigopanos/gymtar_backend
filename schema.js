const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const jointSchema = new mongoose.Schema({
  joints: [
    {
      id: Int32,
      confidence: {
        type: String,
        required: [true, 'Nivel de confidencia de la captura'],
      },
      timestamp: {
        type: String,
        required: [true, 'Timestamp de captura'],
      },
      action_state: String,
      keypoint: [{
        type: Double,
        required: [true, 'Posición X'],
      }, 
      {
        type: Double,
        required: [true, 'Posición Y'],
      },
      {
        type: Double,
        required: [true, 'Posición Z'],
      }],
      tracking_state: {
        type: String,
        required: [true, 'Estado de trackeo (quieto o en movimiento']
      },
      unique_object_id: {
        type: String,
        required: [true, 'Id única del objeto']
      }
    },
  ],
});

const Joint = mongoose.model('Joint', jointSchema);

const testJoint = new Joint({
  [{
    local_position: '35.6',
    local_rotation: '532,1',
    confidence: '',
    frame: '24',
  }],
});
