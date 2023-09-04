const mongoose = require('mongoose');

function jointCreator(modelName = 'Joint') {
  const JointSchema = new mongoose.Schema({
    [String]:
          {
            is_new: [Boolean],
            is_tracked: [Boolean],
            timestamp: [Number],
            body_list:
            [
              {
                id: Number,
                unique_object_id: String,
                tracking_state: String,
                action_state: String,
                position: [
                  Number,
                  Number,
                  Number,
                ],
                confidence: Number,
                keypoint: [[Number]],
                local_position_per_joint: [Number],
                local_orientation_per_joint: [Number],
              },
            ],
          },
  });

  let Joint;
  // eslint-disable-next-line prefer-const
  Joint = mongoose.model(modelName, JointSchema);
  return Joint;
}

const Joint = jointCreator();
// export const Joint = jointCreator();
module.exports = Joint;
