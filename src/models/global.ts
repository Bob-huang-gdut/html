// 全局共享数据示例
import { DEFAULT_NAME, LIST } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const [list, setList] = useState<any>(LIST)
  return {
    name,
    setName,
    list,
    setList,
  };
};

export default useUser;
