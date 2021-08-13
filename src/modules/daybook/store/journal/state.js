export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae a veritatis, sequi harum sit ducimus nobis! Vel ad quo dicta, provident ducimus nemo eum commodi dolor maiores perferendis sed quibusdam?',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae a veritatis, sequi harum sit ducimus nobis! Vel ad quo dicta, provident ducimus nemo eum commodi dolor maiores perferendis sed quibusdam?',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae a veritatis, sequi harum sit ducimus nobis! Vel ad quo dicta, provident ducimus nemo eum commodi dolor maiores perferendis sed quibusdam?',
            picture: null
        }
    ]
})