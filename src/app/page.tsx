import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/app/_components/shadcn/button';

import $styles from './page.module.css';

const HomePage: FC = async () => (
    <div className="tw-page-container tw-items-center tw-justify-center">
        <div className={$styles.block}>
            <div className="tw-w-full">
                欢迎来到3R教室，这是<b>Nextjs课程的开始</b>
            </div>
            <Button asChild>
                <Link href="https://3rcd.com" target="_blank">
                    查看官网
                </Link>
            </Button>
        </div>
    </div>
);

export default HomePage;
