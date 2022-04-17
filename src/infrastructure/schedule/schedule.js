import nodeSchedule from 'node-schedule'
import verifyMost from '../../useCases/verifyMost.js';

const job = nodeSchedule.scheduleJob('* * 12 * * *', () => {
    console.log(new Date())
    verifyMost()
});

export default job