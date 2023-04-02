// Dependencies
import { Button } from '@douyinfe/semi-ui';

// Stores
import { useModeStore } from '@/stores';

// Images
import xiaoqw from '@assets/images/xiaoqw.png';

function Home() {
  const switchMode = useModeStore((state) => state.switchMode);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img width={200} src={xiaoqw} alt="illustration" />

      <Button className="mt-16" type="primary" onClick={switchMode}>
        Switch Mode
      </Button>
    </div>
  );
}

export default Home;
