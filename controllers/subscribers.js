import Subscriber from "../models/subscriber.js";


export const getAll = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getOne = (req, res) => {
    res.json(res.subscriber);
  }


export const addSubscriber = async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const updateSubscriber = async (req, res) => {
  if (req.body.name !== null) res.subscriber.name = req.body.name;
  if (req.body.subscribedToChannel !== null) res.subscriber.subscribedToChannel = req.body.subscribedToChannel;

  try {
    const updateSubscriber = await res.subscriber.save();
    res.json(updateSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteSubscriber = async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: "Deleted Subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
