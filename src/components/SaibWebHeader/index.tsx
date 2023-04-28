import { CaretLeft } from '@phosphor-icons/react';
import React from 'react';

interface HeaderProps {
  title: string;
  navigation?: {
    isNavigation: boolean;
    redirect: () => void;
  };
}

export function SaibWebHeader({ title, navigation }: HeaderProps) {
  return (
    <div className="bg-secondary-400 w-full border-b-[2px] border-bottom border-gray-500 py-2 px-8">
      <div className="gap-2 items-center flex">
        {navigation?.isNavigation && (
          <CaretLeft
            size={24}
            onClick={navigation.redirect}
            className="cursor-pointer"
          />
        )}
        <span className="font-medium text-xl">{title}</span>
      </div>
    </div>
  );
}
