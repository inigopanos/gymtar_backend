import mongoose from 'mongoose';

export function jointCreator(modelName = 'Joint') {
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
  if (mongoose.default.models[modelName]) {
    Joint = mongoose.model(modelName);
  } else {
    Joint = mongoose.model(modelName, JointSchema);
  }
  return Joint;
}

export const Joint = jointCreator();
