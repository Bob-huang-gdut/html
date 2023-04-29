// 全局共享数据示例
import { DEFAULT_NAME, LIST } from '@/constants';
import { useState } from 'react';
import { filter } from 'lodash-es';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const [list, setList] = useState<any>(LIST)
  const queryList = (values: any) =>
  {
    const { type, page, technology, expense } = values; // 解构出需要过滤的字段
    setList(filter(LIST, item =>
      {
        return (!type || item.type === type) && // 如果没有 type 字段则判定为 true
               (!page || item.page === page) && // 如果没有 page 字段则判定为 true
               (!technology || item.technology === technology) && // 如果没有 technology 字段则判定为 true
               (!expense || item.expense === expense); // 如果没有 expense 字段则判定为 true
      }))
  }
  return {
    name,
    setName,
    list,
    queryList,
  };
};

export default useUser;
